---
title: Center
description: コンテンツを水平方向に中央揃えし、最大幅を制限するコンポーネント
---

# Center

Center はコンテンツを水平方向に中央揃えし、最大幅を制限するコンポーネントです。読みやすいテキスト幅を維持するために使用します。

## 基本的な使い方

```tsx
import { Center } from '@martians-sheep/layout-primitives';

<Center maxWidth="base">
  <p>中央揃えされたコンテンツ</p>
</Center>
```

## Props

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `maxWidth` | `MeasureValue` | `"base"` | 最大幅 |
| `gutters` | `SpaceValue` | - | 左右の余白（ガター） |
| `intrinsic` | `boolean` | `false` | コンテンツの自然な幅に基づいて中央揃え |
| `as` | `ElementType` | `"div"` | レンダリングするHTML要素 |

## 最大幅

テキストの読みやすさを考慮した最大幅トークンを使用できます。

```tsx
// 狭い幅（45ch）
<Center maxWidth="narrow">...</Center>

// 標準幅（65ch）
<Center maxWidth="base">...</Center>

// 広い幅（80ch）
<Center maxWidth="wide">...</Center>

// カスタム値
<Center maxWidth="800px">...</Center>
```

:::tip
`ch` 単位は「0」の文字幅を基準とした単位です。65ch は英文で約13語/行となり、読みやすい行長とされています。
:::

## Gutters

`gutters` を使用すると、ウィンドウ幅が狭くなった際にも左右に余白が確保されます。

```tsx
<Center maxWidth="base" gutters="md">
  <p>狭い画面でも余白が確保されます</p>
</Center>
```

## Intrinsic

`intrinsic` を true にすると、コンテンツの自然な幅に基づいて中央揃えされます。

```tsx
<Center intrinsic>
  <button>短いボタン</button>
</Center>
```

通常の Center は子要素を全幅に伸ばしますが、`intrinsic` を使用すると子要素は自身の幅を維持したまま中央に配置されます。

## ページレイアウト

Center は通常、ページのメインコンテンツラッパーとして使用されます。

```tsx
<Center as="main" maxWidth="base" gutters="md">
  <article>
    <h1>記事タイトル</h1>
    <p>本文...</p>
  </article>
</Center>
```

## CSS変数

Center コンポーネントは以下のCSS変数を使用しています。

| 変数名 | 説明 |
|--------|------|
| `--center-max-width` | 最大幅 |
| `--center-gutters` | 左右の余白 |
