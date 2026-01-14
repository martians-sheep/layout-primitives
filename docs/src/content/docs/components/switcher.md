---
title: Switcher
description: 閾値ベースでレイアウトを切り替えるコンポーネント
---

# Switcher

Switcher は閾値ベースでレイアウトを切り替えるコンポーネントです。コンテナの幅が閾値より広い場合は水平レイアウト、狭い場合は垂直レイアウトに自動的に切り替わります。

## 基本的な使い方

```tsx
import { Switcher } from '@martians-sheep/layout-primitives';

<Switcher threshold="30rem" gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Switcher>
```

## Props

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `threshold` | `string` | `"30rem"` | レイアウト切り替えの閾値 |
| `gap` | `SpaceValue` | `"md"` | アイテム間のギャップ |
| `limit` | `2 \| 3 \| 4 \| 5` | - | 1行あたりの最大アイテム数 |
| `as` | `ElementType` | `"div"` | レンダリングするHTML要素 |

## 閾値

`threshold` を調整することで、レイアウトが切り替わるタイミングを制御できます。

```tsx
// 狭いコンテナでも横並び
<Switcher threshold="20rem">...</Switcher>

// 広いコンテナでのみ横並び
<Switcher threshold="50rem">...</Switcher>
```

:::tip
閾値は「コンテナの幅」に基づいて判断されます。ビューポート幅ではありません。
:::

## Limit

`limit` を使用すると、指定した数を超えるアイテムがある場合、全てのアイテムが垂直に積まれます。

```tsx
// 3つまでは横並び、4つ以上は縦並び
<Switcher limit={3}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div> {/* 4つ目があるので全て縦並びになる */}
</Switcher>
```

これは「4つ以上のアイテムを無理に横並びにしない」というデザイン判断を実装するのに便利です。

## フォームレイアウト

```tsx
<Box padding="lg" borderWidth="1px">
  <h3>Contact Form</h3>
  <Switcher threshold="25rem" gap="md">
    <div>
      <label>First Name</label>
      <input type="text" />
    </div>
    <div>
      <label>Last Name</label>
      <input type="text" />
    </div>
  </Switcher>
</Box>
```

## 価格カード

```tsx
<Switcher threshold="40rem" gap="lg" limit={3}>
  <Box padding="lg" borderWidth="1px">
    <h3>Basic</h3>
    <p>$9/mo</p>
  </Box>
  <Box padding="lg" borderWidth="2px">
    <h3>Pro</h3>
    <p>$29/mo</p>
  </Box>
  <Box padding="lg" borderWidth="1px">
    <h3>Enterprise</h3>
    <p>$99/mo</p>
  </Box>
</Switcher>
```

## CSS の仕組み

Switcher は `flex-basis` と `flex-grow` を組み合わせた巧妙なCSSトリックを使用しています。

```css
.switcher > * {
  flex-grow: 1;
  flex-basis: calc((var(--switcher-threshold) - 100%) * 999);
}
```

`(threshold - 100%) * 999` の計算結果が:
- 正の大きな値（コンテナが狭い）→ 各アイテムが全幅になる（縦並び）
- 負の大きな値（コンテナが広い）→ 各アイテムが `flex-grow` で均等に広がる（横並び）

## CSS変数

Switcher コンポーネントは以下のCSS変数を使用しています。

| 変数名 | 説明 |
|--------|------|
| `--switcher-threshold` | レイアウト切り替えの閾値 |
| `--switcher-gap` | アイテム間のギャップ |
