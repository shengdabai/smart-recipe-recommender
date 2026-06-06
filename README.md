# 🍳 Smart Recipe Recommender · 美食制作

**English | [中文](#中文)**

> Tell it what's in your fridge — get an AI-planned menu in seconds. Mobile-first, zero install, works offline for matching.

[![Last commit](https://img.shields.io/github/last-commit/shengdabai/smart-recipe-recommender)](https://github.com/shengdabai/smart-recipe-recommender/commits)
[![Stars](https://img.shields.io/github/stars/shengdabai/smart-recipe-recommender?style=social)](https://github.com/shengdabai/smart-recipe-recommender/stargazers)
[![Follow @shengdabai](https://img.shields.io/github/followers/shengdabai?style=social)](https://github.com/shengdabai)

**[▶️ Try it live](https://shengdabai.github.io/smart-recipe-recommender/)**

---

## Why

The hardest part of cooking isn't the cooking — it's deciding *what* to cook. You open the fridge, stare at half an onion and three eggs, and give up. Smart Recipe Recommender turns whatever you already have into a complete, balanced menu — no shopping trip, no decision fatigue.

## What

A mobile-first web app that recommends dishes based on the ingredients in your fridge. A local matching engine ranks 30 classic recipes by how well they fit what you have, and an optional AI layer (Zhipu GLM-4) plans a full daily menu and answers cooking questions like a chef on call. Pure HTML/CSS/JS — one folder, no build step, no backend.

## ✨ Features

- **🧊 Fridge Manager** — Pick ingredients by category, set quantities, and add anything custom that isn't in the preset list.
- **🍽️ Smart Matching** — A scoring algorithm ranks all 30 recipes by ingredient overlap, so the dishes you *can* make float to the top.
- **🤖 AI Menu Planner** — One tap generates a full daily menu (main dish + side + soup) via GLM-4.
- **👨‍🍳 Chef Assistant** — Chat with the AI for techniques, substitutions, and flavor tweaks.
- **👥 Serving Adjuster** — Scale any recipe for 1–10 people with ingredient amounts recalculated automatically.
- **🌙 Dark Mode** — Follows your system light/dark theme.
- **📱 iOS Ready** — Add to home screen as a PWA, safe-area optimized for notch and home indicator.
- **🔌 Works Offline** — Recipe matching runs entirely on-device; the API key is only needed for AI features and is stored locally.

## 🧱 Tech stack

- **Pure HTML / CSS / JS** — no frameworks, no build tools, no dependencies.
- **Recipe data** — 30 classic dishes adapted from [HowToCook](https://github.com/Anduin2017/HowToCook).
- **AI** — [Zhipu GLM-4](https://open.bigmodel.cn) for menu planning and chef chat.
- **Storage** — `localStorage` for fridge state, settings, and your API key (kept on your device).
- **Design inspiration** — [TheGodOfCookery](https://github.com/SmartFlowAI/TheGodOfCookery).

## 🚀 Quick start

```bash
git clone https://github.com/shengdabai/smart-recipe-recommender.git
cd smart-recipe-recommender
open index.html   # or just double-click it
```

That's it — no `npm install`, no server. Or deploy the folder to GitHub Pages / any static host.

**AI setup (optional):**

1. Grab a free API key at [open.bigmodel.cn](https://open.bigmodel.cn).
2. In the app, go to **Settings → paste your key → Save**.
3. The AI menu planner and chef chat are now live.

Without a key, local recipe matching works perfectly on its own.

## 📖 Usage

1. **Stock your fridge** — open the Fridge tab and tap the ingredients you have.
2. **See what you can make** — the Recipes tab ranks dishes by match score instantly.
3. **Let AI plan dinner** — tap *Generate Menu* for a main + side + soup combo.
4. **Ask the chef** — open Chat for tips, swaps, and how-tos.
5. **Scale it** — set the number of people and amounts adjust on the fly.

## 🗺️ Status

Actively maintained and live on GitHub Pages. 30 recipes today, with room to grow — ideas and PRs welcome.

## 🤝 Connect / About

Built by **Tony (Sheng)** — a Chinese-language teacher (6,000+ students) building AI + Chinese-learning tools in public.

If this saved you a "what's for dinner?" moment, **⭐ Star the repo and [follow @shengdabai](https://github.com/shengdabai)** to see what's next.

More tools in the same spirit:

- 🔎 [LinguaLens](https://github.com/shengdabai) — AI-assisted language learning lens.
- 🧠 [freespace](https://github.com/shengdabai) — a calmer space for thinking and notes.
- 🍳 …and other small-but-smart projects on my [profile](https://github.com/shengdabai).

## License

MIT — free to use, fork, and remix.

---

# 中文

**[English](#-smart-recipe-recommender--美食制作) | 中文**

> 告诉它冰箱里有什么 —— 几秒钟得到一份 AI 规划的菜单。移动端优先，零安装，匹配功能离线可用。

[![Last commit](https://img.shields.io/github/last-commit/shengdabai/smart-recipe-recommender)](https://github.com/shengdabai/smart-recipe-recommender/commits)
[![Stars](https://img.shields.io/github/stars/shengdabai/smart-recipe-recommender?style=social)](https://github.com/shengdabai/smart-recipe-recommender/stargazers)
[![关注 @shengdabai](https://img.shields.io/github/followers/shengdabai?style=social)](https://github.com/shengdabai)

**[▶️ 在线体验](https://shengdabai.github.io/smart-recipe-recommender/)**

---

## 为什么做这个

做饭最难的从来不是「做」，而是「想」—— 打开冰箱，盯着半个洋葱和三个鸡蛋，最后干脆放弃。美食制作把你现有的食材直接变成一份完整、搭配均衡的菜单：不用出门买菜，也不用纠结。

## 这是什么

一个移动端优先的菜谱推荐 Web 应用：根据冰箱里的食材推荐菜品。本地匹配引擎按食材契合度对 30 道经典菜谱排序，可选的 AI 层（智谱 GLM-4）则一键生成每日菜单、随时回答做菜问题。纯 HTML/CSS/JS —— 一个文件夹，零构建，无后端。

## ✨ 功能特性

- **🧊 冰箱管理** —— 按分类选择食材、设置数量，预设里没有的可自定义添加。
- **🍽️ 智能匹配** —— 评分算法按食材重合度对全部 30 道菜排序，能做的菜自动排到最前。
- **🤖 AI 菜单规划** —— 一键通过 GLM-4 生成今日菜单（主菜 + 副菜 + 汤）。
- **👨‍🍳 厨师助手** —— 和 AI 聊做法、问替代食材、调口味。
- **👥 人数调节** —— 1–10 人份，食材用量自动按比例换算。
- **🌙 暗色模式** —— 自动跟随系统深色 / 浅色主题。
- **📱 iOS 适配** —— 添加到主屏即可当 App 用，已适配刘海和底部安全区。
- **🔌 离线可用** —— 菜谱匹配完全在本地运行；API Key 仅用于 AI 功能，且只存在你的设备上。

## 🧱 技术栈

- **纯 HTML / CSS / JS** —— 无框架、无构建工具、零依赖。
- **菜谱数据** —— 30 道经典菜，改编自 [HowToCook](https://github.com/Anduin2017/HowToCook)。
- **AI 能力** —— [智谱 GLM-4](https://open.bigmodel.cn)，负责菜单规划与厨师聊天。
- **数据存储** —— `localStorage` 保存冰箱状态、设置和 API Key（只留在你本地）。
- **设计灵感** —— [食神 TheGodOfCookery](https://github.com/SmartFlowAI/TheGodOfCookery)。

## 🚀 快速开始

```bash
git clone https://github.com/shengdabai/smart-recipe-recommender.git
cd smart-recipe-recommender
open index.html   # 或直接双击打开
```

就这么简单 —— 无需 `npm install`，无需起服务。也可以把整个文件夹部署到 GitHub Pages / 任意静态托管。

**AI 配置（可选）：**

1. 到 [open.bigmodel.cn](https://open.bigmodel.cn) 免费注册获取 API Key。
2. 在应用里进入 **设置 → 粘贴 Key → 保存**。
3. AI 菜单规划与厨师聊天即可使用。

不配置 Key 时，本地菜谱匹配功能完全可用。

## 📖 使用方法

1. **填满冰箱** —— 打开冰箱页，点选你有的食材。
2. **看能做什么** —— 菜谱页立即按匹配度排序。
3. **让 AI 配晚餐** —— 点「生成菜单」得到主菜 + 副菜 + 汤的组合。
4. **问厨师** —— 打开聊天问技巧、问替代、问步骤。
5. **调人数** —— 设置就餐人数，用量实时调整。

## 🗺️ 状态

持续维护中，已在 GitHub Pages 上线。目前 30 道菜，还有很大扩展空间 —— 欢迎提想法和 PR。

## 🤝 联系 / 关于

由 **Tony（盛）** 开发 —— 一名中文老师（6000+ 学员），在公开构建 AI + 中文学习工具。

如果它帮你解决了一次「今天吃什么」，欢迎 **⭐ Star 本仓库并[关注 @shengdabai](https://github.com/shengdabai)**，看看接下来还会做什么。

同系列的其他小工具：

- 🔎 [LinguaLens](https://github.com/shengdabai) —— AI 辅助的语言学习镜。
- 🧠 [freespace](https://github.com/shengdabai) —— 更安静的思考与笔记空间。
- 🍳 …以及主页上其他 small-but-smart 的小项目，详见我的 [GitHub 主页](https://github.com/shengdabai)。

## 许可证

MIT —— 自由使用、fork、二次创作。
