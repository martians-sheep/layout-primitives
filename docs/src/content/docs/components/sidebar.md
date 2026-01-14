---
title: Sidebar
description: 2カラムレイアウトを提供するコンポーネント
---

# Sidebar

Sidebar は2カラムレイアウトを提供するコンポーネントです。片方が固定幅のサイドバー、もう片方がフレキシブルなメインコンテンツエリアとなります。コンテナが狭くなると自動的にスタック表示に切り替わります。

## 基本的な使い方

```tsx
import { Sidebar } from '@martians-sheep/layout-primitives';

<Sidebar sideWidth="200px" gap="md">
  <aside>サイドバー</aside>
  <main>メインコンテンツ</main>
</Sidebar>
```

## Props

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `side` | `"left" \| "right"` | `"left"` | サイドバーの位置 |
| `sideWidth` | `string` | `"20rem"` | サイドバーの幅 |
| `contentMin` | `string` | `"50%"` | メインコンテンツの最小幅 |
| `gap` | `SpaceValue` | `"md"` | サイドバーとコンテンツ間のギャップ |
| `noStretch` | `boolean` | `false` | アイテムを高さいっぱいに伸ばさない |
| `as` | `ElementType` | `"div"` | レンダリングするHTML要素 |

## サイドバーの位置

```tsx
// 左サイドバー（デフォルト）
<Sidebar side="left">
  <aside>Left sidebar</aside>
  <main>Content</main>
</Sidebar>

// 右サイドバー
<Sidebar side="right">
  <main>Content</main>
  <aside>Right sidebar</aside>
</Sidebar>
```

:::caution
`side="right"` の場合、HTMLの順序も入れ替える必要があります（メインコンテンツが先、サイドバーが後）。
:::

## サイドバー幅

```tsx
// 固定幅
<Sidebar sideWidth="250px">...</Sidebar>

// コンテンツベースの幅
<Sidebar sideWidth="auto">...</Sidebar>
```

## レスポンシブ動作

`contentMin` で指定した幅をメインコンテンツが維持できなくなると、レイアウトは自動的にスタック表示に切り替わります。

```tsx
// より早くスタックに切り替わる
<Sidebar contentMin="60%">...</Sidebar>

// より長く横並びを維持
<Sidebar contentMin="40%">...</Sidebar>
```

## 高さの制御

`noStretch` を使用すると、サイドバーとメインコンテンツが同じ高さに伸びることを防ぎます。

```tsx
<Sidebar noStretch>
  <aside>短いサイドバー</aside>
  <main>
    <p>長いコンテンツ...</p>
    <p>長いコンテンツ...</p>
  </main>
</Sidebar>
```

## ダッシュボードレイアウト

```tsx
<Sidebar sideWidth="220px" gap="0">
  <nav style={{ backgroundColor: '#1f2937', color: 'white', minHeight: '100vh' }}>
    <ul>
      <li>Dashboard</li>
      <li>Users</li>
      <li>Settings</li>
    </ul>
  </nav>
  <main style={{ padding: '2rem' }}>
    <h1>Dashboard</h1>
    <p>メインコンテンツ...</p>
  </main>
</Sidebar>
```

## CSS変数

Sidebar コンポーネントは以下のCSS変数を使用しています。

| 変数名 | 説明 |
|--------|------|
| `--sidebar-width` | サイドバーの幅 |
| `--sidebar-content-min` | メインコンテンツの最小幅 |
| `--sidebar-gap` | サイドバーとコンテンツ間のギャップ |
