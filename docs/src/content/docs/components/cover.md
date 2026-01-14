---
title: Cover
description: 全画面高さのレイアウトを提供するコンポーネント
---

# Cover

Cover は全画面高さのレイアウトを提供し、中央に配置したいコンテンツを垂直方向に中央揃えします。ヒーローセクションやランディングページに最適です。

## 基本的な使い方

```tsx
import { Cover } from '@martians-sheep/layout-primitives';

<Cover minHeight="100vh">
  <header>Header</header>
  <main data-centered>
    <h1>Hero Title</h1>
    <p>Centered content</p>
  </main>
  <footer>Footer</footer>
</Cover>
```

:::important
中央に配置したい要素には `data-centered` 属性を追加してください。
:::

## Props

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `minHeight` | `string` | `"100vh"` | カバーの最小高さ |
| `padding` | `SpaceValue` | `"md"` | カバー内のパディング |
| `noPad` | `boolean` | `false` | パディングを削除 |
| `as` | `ElementType` | `"div"` | レンダリングするHTML要素 |

## 中央配置

`data-centered` 属性を持つ子要素が垂直方向の中央に配置されます。

```tsx
<Cover minHeight="400px">
  <div data-centered>
    <h2>Centered Content</h2>
    <p>This content is vertically centered</p>
  </div>
</Cover>
```

ヘッダーやフッターがある場合:

```tsx
<Cover minHeight="100vh">
  <header>Top</header>
  <main data-centered>Center</main>
  <footer>Bottom</footer>
</Cover>
```

## 高さの制御

```tsx
// 全画面高さ
<Cover minHeight="100vh">...</Cover>

// カスタム高さ
<Cover minHeight="500px">...</Cover>

// 動的な高さ（ヘッダーを除く）
<Cover minHeight="calc(100vh - 60px)">...</Cover>
```

## パディング

```tsx
// 標準パディング
<Cover padding="lg">...</Cover>

// パディングなし
<Cover noPad>...</Cover>
```

## ヒーローセクション

```tsx
<Cover minHeight="100vh" padding="lg">
  <header>
    <nav>
      <a href="/">Logo</a>
      <Cluster gap="md">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </Cluster>
    </nav>
  </header>
  <main data-centered>
    <Center maxWidth="narrow">
      <Stack space="lg" style={{ textAlign: 'center' }}>
        <h1>Welcome to Our Site</h1>
        <p>A brief description of what we do.</p>
        <button>Get Started</button>
      </Stack>
    </Center>
  </main>
  <footer style={{ textAlign: 'center' }}>
    © 2024 Company Name
  </footer>
</Cover>
```

## ログインページ

```tsx
<Cover minHeight="100vh" padding="md">
  <header style={{ textAlign: 'center' }}>
    <span>🚀 MyApp</span>
  </header>
  <main data-centered>
    <Box padding="xl" borderWidth="1px" style={{ maxWidth: '400px' }}>
      <h2>Sign In</h2>
      <form>
        <Stack space="md">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </Stack>
      </form>
    </Box>
  </main>
  <footer style={{ textAlign: 'center' }}>
    <a href="#">Forgot password?</a>
  </footer>
</Cover>
```

## CSS変数

Cover コンポーネントは以下のCSS変数を使用しています。

| 変数名 | 説明 |
|--------|------|
| `--cover-min-height` | 最小高さ |
| `--cover-padding` | 内側の余白 |
