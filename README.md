# 无界微前端体验+turborepo

## 依赖管理
基于pnpm的turborepo作为monorepo管理工具，依赖管理依赖pnpm-workspace
安装依赖使用 `pnpm install` 安装
对于单独一个子应用安装的话使用 `pnpm install --filter <workspace>` 来安装

## 开发
使用 `npm run dev -- --filter <workspace>` 来启动单独的项目 