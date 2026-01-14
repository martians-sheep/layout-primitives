---
title: Box
description: パディングとボーダーを持つコンテナコンポーネント
---

# Box

Box はパディングとボーダーを持つシンプルなコンテナコンポーネントです。コンテンツを囲むための基本的なビルディングブロックとして使用します。

## 基本的な使い方

```tsx
import { Box } from '@martians-sheep/layout-primitives';

<Box padding="md">
  コンテンツ
</Box>
```

## Props

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `padding` | `SpaceValue` | `"md"` | 内側の余白 |
| `borderWidth` | `string` | `"0"` | ボーダーの太さ |
| `invert` | `boolean` | `false` | 色を反転（ダークテーマ風） |
| `as` | `ElementType` | `"div"` | レンダリングするHTML要素 |

## パディング

```tsx
// 小さなパディング
<Box padding="sm">Small padding</Box>

// 大きなパディング
<Box padding="xl">Large padding</Box>

// カスタム値
<Box padding="2rem">Custom padding</Box>
```

## ボーダー

```tsx
<Box padding="md" borderWidth="1px">
  ボーダー付きのBox
</Box>

<Box padding="md" borderWidth="2px">
  太いボーダー
</Box>
```

## 反転表示

`invert` を true にすると、背景色とテキスト色が反転します。

```tsx
<Box padding="md" invert>
  ダークなBox
</Box>
```

:::note
`invert` のスタイルはデフォルトで `background-color: #1f2937; color: white;` が適用されます。カスタマイズする場合は CSS 変数をオーバーライドしてください。
:::

## ネスト

Box はネストして使用することで、階層的なレイアウトを構築できます。

```tsx
<Box padding="lg" borderWidth="1px">
  <p>Outer Box</p>
  <Box padding="md" borderWidth="1px" style={{ marginTop: '1rem' }}>
    <p>Inner Box</p>
  </Box>
</Box>
```

## セマンティックなHTML

```tsx
<Box as="section" padding="lg">
  <h2>セクションタイトル</h2>
  <p>コンテンツ...</p>
</Box>

<Box as="aside" padding="md" borderWidth="1px">
  サイドバーコンテンツ
</Box>
```

## CSS変数

Box コンポーネントは以下のCSS変数を使用しています。

| 変数名 | 説明 |
|--------|------|
| `--box-padding` | 内側の余白 |
| `--box-border-width` | ボーダーの太さ |
