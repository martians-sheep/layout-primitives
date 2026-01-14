---
title: Stack
description: 垂直方向に要素を積み重ねるコンポーネント
---

# Stack

Stack は垂直方向に要素を積み重ね、均等なスペースを確保するコンポーネントです。「owl selector」パターン（`* + *`）を使用しています。

## 基本的な使い方

```tsx
import { Stack } from '@martians-sheep/layout-primitives';

<Stack space="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

## Props

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `space` | `SpaceValue` | `"md"` | 要素間のスペース |
| `recursive` | `boolean` | `false` | 全ての子孫要素にスペースを適用 |
| `splitAfter` | `1 \| 2 \| 3 \| 4 \| 5` | - | 指定したインデックス以降を下部に押しやる |
| `as` | `ElementType` | `"div"` | レンダリングするHTML要素 |

## スペーシング

```tsx
// 小さなスペース
<Stack space="xs">...</Stack>

// 大きなスペース
<Stack space="xl">...</Stack>

// カスタム値
<Stack space="2.5rem">...</Stack>
```

## Recursive

`recursive` を true にすると、直接の子要素だけでなく、全ての子孫要素にスペースが適用されます。

```tsx
<Stack space="md" recursive>
  <div>Parent Item</div>
  <div>
    <p>Nested paragraph 1</p>
    <p>Nested paragraph 2</p>
  </div>
</Stack>
```

:::caution
`recursive` を使用すると、意図しない要素にもスペースが適用される可能性があります。必要な場合のみ使用してください。
:::

## Split After

`splitAfter` を使用すると、指定したインデックス以降の要素をコンテナの下部に押しやることができます。スティッキーフッターのようなレイアウトに便利です。

```tsx
<Stack space="md" splitAfter={2} style={{ minHeight: '100vh' }}>
  <header>Header</header>
  <main>Main Content</main>
  <footer>Footer (pushed to bottom)</footer>
</Stack>
```

## セマンティックなHTML

`as` prop を使用して、適切なHTML要素としてレンダリングできます。

```tsx
<Stack as="ul" space="sm">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</Stack>

<Stack as="article" space="lg">
  <h1>記事タイトル</h1>
  <p>本文...</p>
</Stack>
```

## CSS変数

Stack コンポーネントは以下のCSS変数を使用しています。

| 変数名 | 説明 |
|--------|------|
| `--stack-space` | 要素間のスペース |

```css
.my-custom-stack {
  --stack-space: var(--s-xl);
}
```
