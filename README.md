# Jason 的日常雜記

這是一個基於 [Astro](https://astro.build/) 搭建的個人靜態網誌，專注於文學嘗試、日常雜感與生活思緒的書寫與沈澱。

* **靜態框架**：Astro 5+（零 JS 純靜態 HTML、秒級構建）
* **文字排版**：
  * 英文字型：**Charter** / Bitstream Charter
  * 中文字型：**思源宋體（Noto Serif TC）**（透過 Google Fonts 載入）
* **視覺設計**：極簡素雅、專注長文閱讀（寬裕留白、1.85 行高、柔和暖紙質感與深夜模式）
* **自動部署**：GitHub Actions 自動打包並推送到 `gh-pages` 分支發布。

---

## ✍️ 如何新增文章？

在 `src/content/blog/` 資料夾下新增一個 `.md` 檔案（例如 `my-thoughts.md`），填入以下 frontmatter 即可：

```markdown
---
title: '文章標題'
description: '這篇文章的簡短引言'
pubDate: '2026-11-15'
---

在這裡寫下你的內文...
```

---

## 🛠️ 本地開發指令

```bash
# 安裝依賴
npm install

# 啟動本地即時預覽伺服器（預設為 http://localhost:4321）
npm run dev

# 測試靜態網頁打包
npm run build

# 本地預覽打包結果
npm run preview
```
