# smart-recipe-recommender

🍳 Mobile-first recipe recommender — tell it what's in your fridge, get an AI-planned daily menu (main+side+soup). Zero install.

## Business Context

- **Category:** software project
- **Audience:** builders and operators evaluating a focused software experiment.
- **Repository status:** Public repository. Keep examples, docs, and issues free of credentials, private data, and machine-specific paths.
- **Topics:** ai, glm-4, javascript, mobile-first, pwa, recipe, recommender

## What This Project Is For

- 🍳 Mobile-first recipe recommender — tell it what's in your fridge, get an AI-planned daily menu (main+side+soup). Zero install.
- Clarify the problem this project solves and who it is for.
- Make setup, review, and iteration easier for future collaborators.

## Where It Fits

This repository captures a focused experiment or tool that can be evaluated, reused, or promoted into a productized workflow when it proves useful.

## Technical Overview

- **Primary language:** JavaScript
- **Detected stack:** JavaScript
- **Default branch:** `main`
- **Visibility:** `PUBLIC`
- **License:** MIT License

## Repository Map

- `LICENSE`
- `README.md`
- `SECURITY.md`
- `app.js`
- `index.html`
- `recipes.js`
- `style.css`

## Quick Start

Use the commands that match the current project state:

```bash
python3 -m http.server 8000
```

| Command | Purpose |
|---|---|
| `python3 -m http.server 8000` | Preview static files locally. |

## Operating Notes

- Keep real credentials out of the repository. Use local environment files, GitHub repository secrets, or the deployment platform secret manager.
- If a `.env.example` file exists, treat it as documentation only; never commit filled-in `.env` files.
- Before publishing screenshots, demos, or client examples, remove private names, internal paths, account IDs, and API endpoints.
- The `Repository Hygiene` workflow is a lightweight guardrail, not a replacement for product-specific tests.

## Delivery Checklist

<<<<<<< HEAD
- [ ] README describes the user, business outcome, and operating boundary.
- [ ] Setup or preview commands are current and do not rely on private machine state.
- [ ] No real secrets, private user data, or machine-local state are tracked.
- [ ] Screenshots, demos, or sample outputs are safe to share publicly when the repository is public.
- [ ] Product-specific tests or smoke checks are documented before production use.
=======
> **Security note:** This is a pure client-side app — your API key is stored only in your browser's `localStorage` and never sent anywhere except directly to the GLM API. It is not written into the page source. Use a key with usage limits set on the provider dashboard if you share the app on a public device.

## 📖 Usage
>>>>>>> 9970c24 (chore: security hardening + cleanup + docs (audit 2026-06-23))

## Roadmap

- Tighten the fastest path from clone to useful demo.
- Add project-specific screenshots, sample outputs, or a short walkthrough where useful.
- Promote repeated manual steps into scripts, tests, or documented workflows.
- Keep security, privacy, and licensing boundaries explicit as the project evolves.

## Maintainer Notes

<<<<<<< HEAD
Maintained by [Tony Sheng](https://github.com/shengdabai). This README is written as a business-facing handoff: it should help a future collaborator, client, or reviewer understand why the repository exists, how to inspect it, and what must be true before it is reused or shipped.
=======
## 🤝 Connect / About

Built by **Tony (Sheng)** — a Chinese-language teacher (6,000+ students) building AI + Chinese-learning tools in public.

If this saved you a "what's for dinner?" moment, **⭐ Star the repo and [follow @shengdabai](https://github.com/shengdabai)** to see what's next.

More tools in the same spirit:

- 🍳 …small-but-smart projects on my [profile](https://github.com/shengdabai).

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

> **安全说明：** 本应用是纯客户端项目 —— API Key 仅存储在你浏览器的 `localStorage` 中，只会直接发往 GLM API，不会写入页面源码，也不会经过任何中间服务器。如果在公共设备上使用，建议在智谱平台为该 Key 设置用量上限。

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

- 🍳 …更多 small-but-smart 小项目，详见我的 [GitHub 主页](https://github.com/shengdabai)。

## 许可证

MIT —— 自由使用、fork、二次创作。
>>>>>>> 9970c24 (chore: security hardening + cleanup + docs (audit 2026-06-23))
