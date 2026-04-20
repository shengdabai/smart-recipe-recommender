// 智谱 GLM API 集成
const GLM_API = {
  key: localStorage.getItem('glm_api_key') || '',
  url: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
  model: 'glm-4-flash',

  setKey(key) {
    this.key = key;
    localStorage.setItem('glm_api_key', key);
  },

  async chat(messages) {
    if (!this.key) {
      throw new Error('请先设置 GLM API Key');
    }

    const res = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.key}`
      },
      body: JSON.stringify({
        model: this.model,
        messages,
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error?.message || `API 错误: ${res.status}`);
    }

    const data = await res.json();
    return data.choices[0].message.content;
  }
};

// 应用状态
const App = {
  state: {
    fridge: [],          // {name, amount, unit, category}
    servings: 2,
    recommendations: [],
    selectedRecipe: null,
    chatMessages: [],
    page: 'fridge'       // fridge | recipes | recipe | chat | settings
  },

  init() {
    this.loadState();
    this.render();
  },

  loadState() {
    try {
      const saved = localStorage.getItem('cook_app_state');
      if (saved) {
        const s = JSON.parse(saved);
        this.state.fridge = s.fridge || [];
        this.state.servings = s.servings || 2;
        this.state.chatMessages = s.chatMessages || [];
      }
    } catch (e) {}
  },

  saveState() {
    localStorage.setItem('cook_app_state', JSON.stringify({
      fridge: this.state.fridge,
      servings: this.state.servings,
      chatMessages: this.state.chatMessages
    }));
  },

  // 食材匹配算法
  matchRecipes() {
    const fridgeNames = new Set(this.state.fridge.map(i => i.name));
    const scored = RECIPES.map(recipe => {
      const mainIngredients = recipe.ingredients.filter(i =>
        i.type === 'meat' || i.type === 'vegetable' || i.type === 'other'
      );
      const matched = mainIngredients.filter(i => fridgeNames.has(i.name));
      const score = mainIngredients.length > 0
        ? matched.length / mainIngredients.length
        : 0;
      return { ...recipe, matchScore: score, matchedCount: matched.length, missingIngredients: mainIngredients.filter(i => !fridgeNames.has(i.name)).map(i => i.name) };
    });

    return scored
      .filter(r => r.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore || b.matchedCount - a.matchedCount);
  },

  // 调整菜谱份量
  adjustServings(recipe, servings) {
    const ratio = servings / recipe.servings;
    return {
      ...recipe,
      servings,
      ingredients: recipe.ingredients.map(i => {
        const match = i.amount.match(/^([\d.]+)(.*)/);
        if (match) {
          const val = Math.round(parseFloat(match[1]) * ratio * 10) / 10;
          return { ...i, amount: val + match[2] };
        }
        return i;
      })
    };
  },

  // AI 推荐今日菜单
  async aiRecommend() {
    const fridgeList = this.state.fridge.map(i => `${i.name}(${i.amount}${i.unit})`).join('、');
    const messages = [
      {
        role: 'system',
        content: `你是一位经验丰富的中国厨师。根据用户冰箱里的食材，推荐今日最佳菜单。
要求：
1. 推荐一道主菜、一道副菜、一道汤（如果食材足够）
2. 考虑营养搭配和口味平衡
3. 每道菜简要说明做法要点
4. 适合 ${this.state.servings} 人用餐
5. 给出具体的食材用量（按人数调整）
6. 如果有缺少的食材，说明哪些可以省略，哪些必须购买`
      },
      {
        role: 'user',
        content: `我冰箱里有这些食材：${fridgeList}。请为 ${this.state.servings} 人推荐今日菜单。`
      }
    ];

    return await GLM_API.chat(messages);
  },

  // AI 聊天
  async chat(userMsg) {
    this.state.chatMessages.push({ role: 'user', content: userMsg });
    this.render();

    const fridgeList = this.state.fridge.map(i => `${i.name}(${i.amount}${i.unit})`).join('、');
    const systemMsg = {
      role: 'system',
      content: `你是一位亲切的中国厨师助手。用户的冰箱里有：${fridgeList}，用餐人数：${this.state.servings} 人。
你可以：
- 根据食材推荐菜谱
- 回答烹饪问题
- 给出做菜技巧
- 调整口味和做法
请用简洁实用的中文回答。`
    };

    const msgs = [systemMsg, ...this.state.chatMessages.slice(-10)];

    try {
      const reply = await GLM_API.chat(msgs);
      this.state.chatMessages.push({ role: 'assistant', content: reply });
      this.saveState();
      this.render();
    } catch (e) {
      this.state.chatMessages.push({ role: 'assistant', content: `❌ ${e.message}` });
      this.render();
    }
  },

  // 渲染
  render() {
    const root = document.getElementById('app');
    root.innerHTML = '';

    switch (this.state.page) {
      case 'fridge':
        root.appendChild(this.renderFridge());
        break;
      case 'recipes':
        root.appendChild(this.renderRecipes());
        break;
      case 'recipe':
        root.appendChild(this.renderRecipeDetail());
        break;
      case 'chat':
        root.appendChild(this.renderChat());
        break;
      case 'settings':
        root.appendChild(this.renderSettings());
        break;
    }

    root.appendChild(this.renderNavbar());
  },

  renderNavbar() {
    const nav = document.createElement('nav');
    nav.className = 'navbar';
    nav.innerHTML = `
      <button class="nav-btn ${this.state.page === 'fridge' ? 'active' : ''}" onclick="App.navigate('fridge')">
        <span class="nav-icon">🧊</span><span class="nav-label">冰箱</span>
      </button>
      <button class="nav-btn ${this.state.page === 'recipes' ? 'active' : ''}" onclick="App.navigate('recipes')">
        <span class="nav-icon">🍽️</span><span class="nav-label">菜谱</span>
      </button>
      <button class="nav-btn ${this.state.page === 'chat' ? 'active' : ''}" onclick="App.navigate('chat')">
        <span class="nav-icon">👨‍🍳</span><span class="nav-label">厨师</span>
      </button>
      <button class="nav-btn ${this.state.page === 'settings' ? 'active' : ''}" onclick="App.navigate('settings')">
        <span class="nav-icon">⚙️</span><span class="nav-label">设置</span>
      </button>
    `;
    return nav;
  },

  navigate(page) {
    this.state.page = page;
    this.render();
  },

  renderFridge() {
    const div = document.createElement('div');
    div.className = 'page fridge-page';

    const fridgeByCategory = {};
    this.state.fridge.forEach(item => {
      if (!fridgeByCategory[item.category]) fridgeByCategory[item.category] = [];
      fridgeByCategory[item.category].push(item);
    });

    div.innerHTML = `
      <header class="page-header">
        <h1>🧊 我的冰箱</h1>
        <p class="subtitle">添加食材，获取推荐菜谱</p>
      </header>

      <div class="servings-selector">
        <span class="servings-label">用餐人数</span>
        <div class="servings-controls">
          <button class="serving-btn" onclick="App.changeServings(-1)">−</button>
          <span class="serving-count">${this.state.servings} 人</span>
          <button class="serving-btn" onclick="App.changeServings(1)">+</button>
        </div>
      </div>

      ${this.state.fridge.length > 0 ? `
        <div class="fridge-summary">
          <span>已添加 ${this.state.fridge.length} 种食材</span>
          <button class="btn-recommend" onclick="App.goRecommend()">
            🔥 查看推荐菜谱 (${this.matchRecipes().filter(r => r.matchScore >= 0.3).length})
          </button>
        </div>
      ` : '<div class="empty-tip">👆 点击下方食材添加到冰箱</div>'}

      <div class="fridge-items">
        ${Object.entries(fridgeByCategory).map(([cat, items]) => `
          <div class="fridge-category">
            <h3>${cat}</h3>
            <div class="fridge-tags">
              ${items.map(item => `
                <span class="fridge-tag">
                  ${item.name} ${item.amount}${item.unit}
                  <button class="tag-remove" onclick="App.removeFromFridge('${item.name}')">×</button>
                </span>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="ingredient-picker">
        <div class="picker-header">
          <h3>添加食材</h3>
          <button class="btn-add-custom" onclick="App.showCustomModal()">✚ 自定义</button>
        </div>
        <div class="search-box">
          <input type="text" id="ingredient-search" placeholder="搜索食材..." oninput="App.filterIngredients(this.value)">
        </div>
        <div class="category-tabs">
          ${Object.keys(INGREDIENT_CATEGORIES).map(cat => `
            <button class="cat-tab" onclick="App.showCategory('${cat}')">${cat}</button>
          `).join('')}
        </div>
        <div class="ingredient-grid" id="ingredient-grid">
          ${this.renderIngredientGrid()}
        </div>
      </div>

      <div class="custom-modal-overlay" id="custom-modal" style="display:none" onclick="App.hideCustomModal(event)">
        <div class="custom-modal">
          <h3>✚ 添加自定义食材</h3>
          <div class="custom-field">
            <label>食材名称</label>
            <input type="text" id="custom-name" placeholder="如：三文鱼">
          </div>
          <div class="custom-row">
            <div class="custom-field">
              <label>数量</label>
              <input type="text" id="custom-amount" placeholder="如：500" value="1">
            </div>
            <div class="custom-field">
              <label>单位</label>
              <select id="custom-unit">
                <option value="份">份</option>
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="个">个</option>
                <option value="根">根</option>
                <option value="块">块</option>
                <option value="片">片</option>
                <option value="颗">颗</option>
                <option value="条">条</option>
                <option value="ml">ml</option>
              </select>
            </div>
          </div>
          <div class="custom-field">
            <label>分类</label>
            <select id="custom-category">
              <option value="肉类">🥩 肉类</option>
              <option value="蛋奶">🥚 蛋奶</option>
              <option value="蔬菜">🥬 蔬菜</option>
              <option value="主食">🍚 主食</option>
              <option value="调料">🫙 调料</option>
              <option value="饮品/其他">🥤 饮品/其他</option>
            </select>
          </div>
          <button class="btn-custom-add" onclick="App.addCustomIngredient()">添加到冰箱</button>
        </div>
      </div>
    `;

    return div;
  },

  renderIngredientGrid(category) {
    const cats = category ? { [category]: INGREDIENT_CATEGORIES[category] } : INGREDIENT_CATEGORIES;
    const fridgeNames = new Set(this.state.fridge.map(i => i.name));

    return Object.entries(cats).map(([cat, items]) => `
      <div class="ingredient-category">
        <h4>${cat}</h4>
        <div class="ingredient-items">
          ${items.map(item => `
            <button class="ingredient-btn ${fridgeNames.has(item.name) ? 'in-fridge' : ''}"
                    onclick="App.addToFridge('${item.name}', '${cat}')">
              <span class="ing-emoji">${item.emoji}</span>
              <span class="ing-name">${item.name}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `).join('');
  },

  showCategory(cat) {
    document.getElementById('ingredient-grid').innerHTML = this.renderIngredientGrid(cat);
    document.querySelectorAll('.cat-tab').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  },

  filterIngredients(query) {
    if (!query) {
      document.getElementById('ingredient-grid').innerHTML = this.renderIngredientGrid();
      return;
    }
    const q = query.toLowerCase();
    const fridgeNames = new Set(this.state.fridge.map(i => i.name));
    const results = [];
    Object.entries(INGREDIENT_CATEGORIES).forEach(([cat, items]) => {
      items.forEach(item => {
        if (item.name.includes(q)) results.push({ ...item, category: cat });
      });
    });
    document.getElementById('ingredient-grid').innerHTML = results.length > 0 ? `
      <div class="ingredient-items">
        ${results.map(item => `
          <button class="ingredient-btn ${fridgeNames.has(item.name) ? 'in-fridge' : ''}"
                  onclick="App.addToFridge('${item.name}', '${item.category}')">
            <span class="ing-emoji">${item.emoji}</span>
            <span class="ing-name">${item.name}</span>
          </button>
        `).join('')}
      </div>
    ` : `
      <div class="no-results">
        <p>未找到"${query}"</p>
        <button class="btn-quick-add" onclick="App.quickAddIngredient('${query}')">✚ 添加"${query}"到冰箱</button>
      </div>
    `;
  },

  addToFridge(name, category) {
    const existing = this.state.fridge.find(i => i.name === name);
    if (existing) {
      this.removeFromFridge(name);
      return;
    }
    this.state.fridge.push({ name, amount: 1, unit: '份', category });
    this.saveState();
    this.render();
  },

  quickAddIngredient(name) {
    this.state.fridge.push({ name, amount: 1, unit: '份', category: '其他' });
    this.saveState();
    this.render();
  },

  removeFromFridge(name) {
    this.state.fridge = this.state.fridge.filter(i => i.name !== name);
    this.saveState();
    this.render();
  },

  changeServings(delta) {
    this.state.servings = Math.max(1, Math.min(10, this.state.servings + delta));
    this.saveState();
    this.render();
  },

  goRecommend() {
    this.state.page = 'recipes';
    this.render();
  },

  renderRecipes() {
    const div = document.createElement('div');
    div.className = 'page recipes-page';
    const recipes = this.matchRecipes();

    div.innerHTML = `
      <header class="page-header">
        <h1>🍽️ 推荐菜谱</h1>
        <p class="subtitle">基于你的冰箱食材 · ${this.state.servings} 人餐</p>
      </header>

      <button class="btn-ai-recommend" onclick="App.aiRecommendRecipes()">
        🤖 AI 智能推荐今日菜单
      </button>

      <div class="ai-result" id="ai-result" style="display:none"></div>

      <div class="recipe-list">
        ${recipes.length > 0 ? recipes.map(r => {
          const pct = Math.round(r.matchScore * 100);
          const barColor = pct >= 70 ? '#4caf50' : pct >= 40 ? '#ff9800' : '#f44336';
          return `
            <div class="recipe-card" onclick="App.showRecipe(${r.id})">
              <div class="recipe-card-header">
                <span class="recipe-category">${r.category}</span>
                <span class="recipe-difficulty">${'★'.repeat(r.difficulty)}</span>
              </div>
              <h3 class="recipe-name">${r.name}</h3>
              <div class="recipe-meta">
                <span>⏱ ${r.time}</span>
                <span>👥 ${r.servings}人份</span>
                <span>匹配度 ${pct}%</span>
              </div>
              <div class="match-bar">
                <div class="match-fill" style="width:${pct}%;background:${barColor}"></div>
              </div>
              ${r.missingIngredients.length > 0 ? `
                <div class="missing-note">缺少: ${r.missingIngredients.join('、')}</div>
              ` : '<div class="match-full">✅ 食材齐全</div>'}
            </div>
          `;
        }).join('') : '<div class="empty-tip">冰箱空空的，先去添加食材吧 🧊</div>'}
      </div>
    `;

    return div;
  },

  async aiRecommendRecipes() {
    const btn = document.querySelector('.btn-ai-recommend');
    const resultDiv = document.getElementById('ai-result');

    if (!GLM_API.key) {
      resultDiv.style.display = 'block';
      resultDiv.innerHTML = '<div class="ai-error">请先在设置中配置 GLM API Key</div>';
      return;
    }

    btn.disabled = true;
    btn.textContent = '🤖 AI 正在思考...';
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = '<div class="ai-loading">👨‍🍳 厨师正在为你设计今日菜单...</div>';

    try {
      const result = await this.aiRecommend();
      resultDiv.innerHTML = `<div class="ai-content">${this.formatMarkdown(result)}</div>`;
    } catch (e) {
      resultDiv.innerHTML = `<div class="ai-error">❌ ${e.message}</div>`;
    }

    btn.disabled = false;
    btn.textContent = '🤖 AI 智能推荐今日菜单';
  },

  formatMarkdown(text) {
    return text
      .replace(/### (.*)/g, '<h4>$1</h4>')
      .replace(/## (.*)/g, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  },

  showRecipe(id) {
    this.state.selectedRecipe = id;
    this.state.page = 'recipe';
    this.render();
  },

  renderRecipeDetail() {
    const recipe = RECIPES.find(r => r.id === this.state.selectedRecipe);
    if (!recipe) { this.state.page = 'recipes'; return this.render(); }

    const adjusted = this.adjustServings(recipe, this.state.servings);
    const div = document.createElement('div');
    div.className = 'page recipe-detail-page';

    div.innerHTML = `
      <header class="page-header">
        <button class="btn-back" onclick="App.navigate('recipes')">← 返回</button>
        <h1>${adjusted.name}</h1>
        <div class="recipe-meta">
          <span class="recipe-category">${adjusted.category}</span>
          <span>${'★'.repeat(adjusted.difficulty)}</span>
          <span>⏱ ${adjusted.time}</span>
          <span>👥 ${adjusted.servings}人份</span>
        </div>
      </header>

      <section class="recipe-section">
        <h2>📝 食材清单</h2>
        <div class="ingredient-list">
          ${adjusted.ingredients.map(i => `
            <div class="ingredient-row">
              <span class="ing-name">${i.name}</span>
              <span class="ing-amount">${i.amount}</span>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="recipe-section">
        <h2>👨‍🍳 制作步骤</h2>
        <div class="steps-list">
          ${adjusted.steps.map((step, i) => `
            <div class="step-item">
              <div class="step-num">${i + 1}</div>
              <div class="step-text">${step}</div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="recipe-section">
        <button class="btn-ai-help" onclick="App.askAboutRecipe('${adjusted.name}')">
          💬 问厨师这道菜的技巧
        </button>
      </section>
    `;

    return div;
  },

  askAboutRecipe(name) {
    this.state.chatMessages.push({
      role: 'user',
      content: `${name}有什么做菜技巧和注意事项？`
    });
    this.state.page = 'chat';
    this.render();
    this.sendChat();
  },

  renderChat() {
    const div = document.createElement('div');
    div.className = 'page chat-page';

    div.innerHTML = `
      <header class="page-header chat-header">
        <h1>👨‍🍳 厨师助手</h1>
        <p class="subtitle">问做菜、要菜谱、调口味</p>
      </header>

      <div class="chat-messages" id="chat-messages">
        ${this.state.chatMessages.length > 0
          ? this.state.chatMessages.map(m => `
              <div class="chat-msg ${m.role}">
                <div class="msg-avatar">${m.role === 'user' ? '🧑' : '👨‍🍳'}</div>
                <div class="msg-bubble">${this.formatMarkdown(m.content)}</div>
              </div>
            `).join('')
          : '<div class="chat-welcome">👋 嗨！我是你的厨师助手，有任何做菜问题都可以问我</div>'
        }
      </div>

      <div class="chat-input-area">
        <input type="text" id="chat-input" placeholder="问我任何做菜问题..."
               onkeydown="if(event.key==='Enter')App.sendChat()">
        <button class="btn-send" onclick="App.sendChat()">发送</button>
      </div>
    `;

    // Auto scroll to bottom
    setTimeout(() => {
      const msgs = document.getElementById('chat-messages');
      if (msgs) msgs.scrollTop = msgs.scrollHeight;
    }, 50);

    return div;
  },

  async sendChat() {
    const input = document.getElementById('chat-input');
    const msg = input?.value?.trim();
    if (!msg) return;
    input.value = '';
    await this.chat(msg);
  },

  renderSettings() {
    const div = document.createElement('div');
    div.className = 'page settings-page';

    div.innerHTML = `
      <header class="page-header">
        <h1>⚙️ 设置</h1>
      </header>

      <section class="setting-section">
        <h3>🔑 GLM API Key</h3>
        <p class="setting-desc">从 <a href="https://open.bigmodel.cn" target="_blank">open.bigmodel.cn</a> 获取免费 API Key</p>
        <div class="setting-input">
          <input type="password" id="glm-key" value="${GLM_API.key}"
                 placeholder="输入你的 GLM API Key">
          <button class="btn-save" onclick="App.saveApiKey()">保存</button>
        </div>
        <p class="setting-status" id="api-status">${GLM_API.key ? '✅ 已配置' : '⚠️ 未配置（可使用本地菜谱匹配，AI 功能需配置 Key）'}</p>
      </section>

      <section class="setting-section">
        <h3>📊 数据管理</h3>
        <button class="btn-danger" onclick="App.clearData()">清空所有数据</button>
      </section>

      <section class="setting-section">
        <h3>📖 关于</h3>
        <p class="setting-desc">
          菜谱数据来自 <a href="https://github.com/Anduin2017/HowToCook" target="_blank">HowToCook</a><br>
          AI 能力由智谱 GLM-4 提供<br>
          设计灵感来自 <a href="https://github.com/SmartFlowAI/TheGodOfCookery" target="_blank">TheGodOfCookery</a>
        </p>
      </section>
    `;

    return div;
  },

  saveApiKey() {
    const key = document.getElementById('glm-key').value.trim();
    if (key) {
      GLM_API.setKey(key);
      document.getElementById('api-status').textContent = '✅ 已保存';
    }
  },

  showCustomModal() {
    document.getElementById('custom-modal').style.display = 'flex';
    setTimeout(() => document.getElementById('custom-name').focus(), 100);
  },

  hideCustomModal(e) {
    if (e.target.id === 'custom-modal') {
      document.getElementById('custom-modal').style.display = 'none';
    }
  },

  addCustomIngredient() {
    const name = document.getElementById('custom-name').value.trim();
    const amount = document.getElementById('custom-amount').value.trim() || '1';
    const unit = document.getElementById('custom-unit').value;
    const category = document.getElementById('custom-category').value;

    if (!name) {
      document.getElementById('custom-name').style.borderColor = '#ff3b30';
      return;
    }

    const existing = this.state.fridge.find(i => i.name === name);
    if (existing) {
      existing.amount = amount;
      existing.unit = unit;
    } else {
      this.state.fridge.push({ name, amount, unit, category });
    }

    document.getElementById('custom-modal').style.display = 'none';
    document.getElementById('custom-name').value = '';
    document.getElementById('custom-amount').value = '1';
    this.saveState();
    this.render();
  },

  clearData() {
    if (confirm('确定要清空所有数据吗？')) {
      localStorage.removeItem('cook_app_state');
      localStorage.removeItem('glm_api_key');
      this.state.fridge = [];
      this.state.chatMessages = [];
      GLM_API.key = '';
      this.render();
    }
  }
};

// 启动
document.addEventListener('DOMContentLoaded', () => App.init());
