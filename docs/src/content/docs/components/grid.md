---
title: Grid
description: CSS Grid による自動レイアウトを提供するコンポーネント
---

# Grid

Grid は `auto-fill` を使用したレスポンシブなグリッドレイアウトを提供するコンポーネントです。メディアクエリなしで、コンテナの幅に応じて自動的にカラム数が調整されます。

## 基本的な使い方

```tsx
import { Grid } from '@martians-sheep/layout-primitives';

<Grid minItemWidth="200px" gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>
```

## Props

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `minItemWidth` | `string` | `"250px"` | 各アイテムの最小幅 |
| `gap` | `SpaceValue` | `"md"` | グリッドアイテム間のギャップ |
| `as` | `ElementType` | `"div"` | レンダリングするHTML要素 |

## 最小幅

`minItemWidth` を調整することで、カラム数の変化点を制御できます。

```tsx
// 小さなアイテム（より多くのカラム）
<Grid minItemWidth="150px">...</Grid>

// 大きなアイテム（より少ないカラム）
<Grid minItemWidth="300px">...</Grid>
```

:::tip
`minItemWidth` は「この幅より小さくはならない」という意味です。コンテナの幅が許す限り、アイテムは伸びて隙間を埋めます。
:::

## ギャップ

```tsx
// 小さなギャップ
<Grid gap="xs">...</Grid>

// 大きなギャップ
<Grid gap="xl">...</Grid>
```

## カードグリッド

```tsx
<Grid minItemWidth="280px" gap="lg">
  {products.map(product => (
    <article key={product.id}>
      <img src={product.image} alt="" />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </article>
  ))}
</Grid>
```

## 画像ギャラリー

```tsx
<Grid minItemWidth="200px" gap="sm">
  {images.map((src, i) => (
    <Frame key={i} ratio="square">
      <img src={src} alt="" />
    </Frame>
  ))}
</Grid>
```

## CSS Grid の仕組み

Grid は以下のCSSを使用しています。

```css
.grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(var(--grid-min-item-width), 100%), 1fr)
  );
  gap: var(--grid-gap);
}
```

`repeat(auto-fill, minmax(...))` により、コンテナ幅に応じて自動的にカラム数が調整されます。

## CSS変数

Grid コンポーネントは以下のCSS変数を使用しています。

| 変数名 | 説明 |
|--------|------|
| `--grid-min-item-width` | 各アイテムの最小幅 |
| `--grid-gap` | グリッドアイテム間のギャップ |
