# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## frtBlog2.vue

- 位置：`pages/blog2.vue`
- 作用：展示一篇从后端接口 http://localhost:8000/ 获取的文章内容。
- 页面结构：
  - 顶部：Header 组件
  - 中间：文章内容（通过 fetch 获取）
  - 底部：Footer 组件
- 依赖组件：`components/header.vue`、`components/footer.vue`

---

### 页面导航
- 首页：`/`
- 博客2：`/blog2`

## 前端页面

- **frt-index.vue**：前端首页页面，展示JISHI Studio介绍和Three.js动画背景。

// 1
// 主要内容：新增 blog2 页面说明，包含结构和依赖组件。
