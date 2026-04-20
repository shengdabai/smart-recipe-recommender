# 🍳 美食制作 - Smart Recipe Recommender

A mobile-first web app that recommends recipes based on what's in your fridge, powered by AI.

## Features

- **🧊 Fridge Manager** — Select ingredients from your fridge with quantities
- **🍽️ Smart Matching** — Recipe matching algorithm scores dishes by ingredient overlap
- **🤖 AI Recommendations** — GLM-4 powered daily menu suggestions (main dish + side + soup)
- **👨‍🍳 Chef Assistant** — Chat with AI about cooking tips, flavor adjustments, and techniques
- **👥 Serving Adjuster** — Scale recipes for 1-10 people with auto-adjusted ingredient amounts
- **✚ Custom Ingredients** — Add any ingredient not in the preset list
- **🌙 Dark Mode** — Automatic dark/light theme support
- **📱 iOS Ready** — Add to home screen as a PWA, safe-area optimized

## Tech Stack

- Pure HTML/CSS/JS (no build tools, no dependencies)
- [HowToCook](https://github.com/Anduin2017/HowToCook) recipe database (30 recipes)
- [Zhipu GLM-4](https://open.bigmodel.cn) for AI features
- Design inspired by [TheGodOfCookery](https://github.com/SmartFlowAI/TheGodOfCookery)

## Quick Start

1. Open `index.html` in any browser
2. Or deploy to GitHub Pages / any static host

## AI Setup (Optional)

1. Get a free API key from [open.bigmodel.cn](https://open.bigmodel.cn)
2. Go to Settings → paste your API key → Save
3. AI features (smart recommendations, chef chat) are now active

Without an API key, local recipe matching still works perfectly.

## Screenshots

| Fridge | Recipes | Chat |
|--------|---------|------|
| Ingredient selection with categories | Match-scored recipe cards | AI chef assistant |

## License

MIT

---

# 🍳 美食制作 - 智能菜谱推荐

基于冰箱食材的移动端菜谱推荐应用，接入 AI 智能生成每日菜单。

## 功能特性

- **🧊 冰箱管理** — 按分类选择食材，支持自定义添加名称/数量/单位
- **🍽️ 智能匹配** — 根据冰箱食材自动匹配菜谱，计算匹配度并排序
- **🤖 AI 推荐** — 接入智谱 GLM-4，一键生成今日菜单（主菜+副菜+汤）
- **👨‍🍳 厨师助手** — AI 聊天，问做法、调口味、学技巧
- **👥 人数调节** — 1-10人餐，自动按比例调整食材用量
- **✚ 自定义食材** — 搜索不到的食材可手动添加
- **🌙 暗色模式** — 自动适配系统主题
- **📱 iOS 适配** — 添加到主屏幕即可当 App 使用

## 技术栈

- 纯 HTML/CSS/JS，零依赖，无需构建
- 菜谱数据来自 [HowToCook](https://github.com/Anduin2017/HowToCook)（30道经典菜谱）
- AI 能力由 [智谱 GLM-4](https://open.bigmodel.cn) 提供
- 设计灵感来自 [食神 TheGodOfCookery](https://github.com/SmartFlowAI/TheGodOfCookery)

## 快速开始

1. 浏览器直接打开 `index.html`
2. 或部署到 GitHub Pages / 任何静态托管服务

## AI 配置（可选）

1. 在 [open.bigmodel.cn](https://open.bigmodel.cn) 注册获取免费 API Key
2. 进入设置页 → 粘贴 API Key → 保存
3. AI 功能（智能推荐、厨师聊天）即可使用

不配置 API Key 时，本地菜谱匹配功能完全可用。

## 许可证

MIT
