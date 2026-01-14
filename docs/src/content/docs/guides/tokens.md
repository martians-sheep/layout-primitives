---
title: デザイントークン
description: Layout Primitives で使用するデザイントークンについて
---

# デザイントークン

Layout Primitives は CSS Custom Properties を使用したトークンシステムを提供しています。

## スペーシングトークン

モジュラースケールに基づいたスペーシングトークンです。`clamp()` を使用してビューポート幅に応じて流動的に変化します。

| トークン | 値 |
|---------|-----|
| `3xs` | `clamp(0.25rem, 0.23rem + 0.11vw, 0.3125rem)` |
| `2xs` | `clamp(0.5rem, 0.46rem + 0.22vw, 0.625rem)` |
| `xs` | `clamp(0.75rem, 0.69rem + 0.33vw, 0.9375rem)` |
| `sm` | `clamp(1rem, 0.91rem + 0.43vw, 1.25rem)` |
| `md` | `clamp(1.5rem, 1.37rem + 0.65vw, 1.875rem)` |
| `lg` | `clamp(2rem, 1.83rem + 0.87vw, 2.5rem)` |
| `xl` | `clamp(3rem, 2.74rem + 1.30vw, 3.75rem)` |
| `2xl` | `clamp(4rem, 3.65rem + 1.74vw, 5rem)` |
| `3xl` | `clamp(6rem, 5.48rem + 2.61vw, 7.5rem)` |

### 使用例

```tsx
// トークンを使用
<Stack space="lg">...</Stack>

// CSS値を直接指定
<Stack space="2.5rem">...</Stack>

// CSS変数を使用
<Stack space="var(--my-custom-space)">...</Stack>
```

## 最大幅トークン（Measure）

テキストの読みやすさを考慮した最大幅トークンです。

| トークン | 値 | 用途 |
|---------|-----|------|
| `narrow` | `45ch` | 狭いコンテンツ |
| `base` | `65ch` | 標準的なテキスト |
| `wide` | `80ch` | 広めのコンテンツ |

### 使用例

```tsx
<Center maxWidth="base">
  <p>読みやすい幅のテキスト</p>
</Center>

<Center maxWidth="800px">
  <p>カスタム幅</p>
</Center>
```

## アスペクト比トークン

Frame コンポーネントで使用するアスペクト比トークンです。

| トークン | 値 | 用途 |
|---------|-----|------|
| `square` | `1` | 正方形 |
| `landscape` | `4 / 3` | 横長（標準） |
| `widescreen` | `16 / 9` | ワイドスクリーン |
| `ultrawide` | `21 / 9` | ウルトラワイド |
| `portrait` | `3 / 4` | 縦長 |
| `golden` | `1.618` | 黄金比 |

### 使用例

```tsx
<Frame ratio="widescreen">
  <img src="video-thumbnail.jpg" alt="" />
</Frame>

<Frame ratio="3/2">
  <img src="photo.jpg" alt="" />
</Frame>
```

## トークンのカスタマイズ

プロジェクトの要件に合わせてトークンをオーバーライドできます。

```css
:root {
  /* スペーシングをより大きく */
  --space-md: 2rem;
  --space-lg: 3rem;

  /* 最大幅を調整 */
  --measure-base: 70ch;

  /* カスタムアスペクト比 */
  --ratio-cinema: 2.35;
}
```

```tsx
// カスタムトークンを使用
<Frame ratio="var(--ratio-cinema)">
  <video src="movie.mp4" />
</Frame>
```

## TypeScript での型

props はトークン値と CSS 値の両方を受け付けます。

```typescript
type SpaceToken = '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
type SpaceValue = SpaceToken | (string & {});

type MeasureToken = 'narrow' | 'base' | 'wide';
type MeasureValue = MeasureToken | (string & {});

type RatioToken = 'square' | 'landscape' | 'widescreen' | 'ultrawide' | 'portrait' | 'golden';
type RatioValue = RatioToken | (string & {});
```
