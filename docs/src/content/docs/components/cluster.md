---
title: Cluster
description: フレキシブルにラップする要素群を配置するコンポーネント
---

# Cluster

Cluster はフレキシブルにラップする要素群を配置するコンポーネントです。タグ、ボタングループ、ナビゲーションリンクなど、水平方向に並べたいアイテムに最適です。

## 基本的な使い方

```tsx
import { Cluster } from '@martians-sheep/layout-primitives';

<Cluster gap="sm">
  <span>Tag 1</span>
  <span>Tag 2</span>
  <span>Tag 3</span>
</Cluster>
```

## Props

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `gap` | `SpaceValue` | `"md"` | アイテム間のギャップ |
| `justify` | `string` | `"flex-start"` | 主軸方向の配置 |
| `align` | `string` | `"center"` | 交差軸方向の配置 |
| `as` | `ElementType` | `"div"` | レンダリングするHTML要素 |

## ギャップ

```tsx
// 小さなギャップ
<Cluster gap="xs">...</Cluster>

// 大きなギャップ
<Cluster gap="xl">...</Cluster>
```

## 配置

### justify（主軸方向）

```tsx
// 左寄せ（デフォルト）
<Cluster justify="flex-start">...</Cluster>

// 中央揃え
<Cluster justify="center">...</Cluster>

// 右寄せ
<Cluster justify="flex-end">...</Cluster>

// 均等配置
<Cluster justify="space-between">...</Cluster>
```

### align（交差軸方向）

```tsx
// 中央揃え（デフォルト）
<Cluster align="center">...</Cluster>

// 上揃え
<Cluster align="flex-start">...</Cluster>

// 下揃え
<Cluster align="flex-end">...</Cluster>

// ベースライン揃え
<Cluster align="baseline">...</Cluster>
```

## ラップ

Cluster は自動的にラップします。コンテナの幅を超えるとアイテムは次の行に折り返されます。

```tsx
<div style={{ maxWidth: '300px' }}>
  <Cluster gap="sm">
    <span>React</span>
    <span>TypeScript</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>HTML</span>
  </Cluster>
</div>
```

## ナビゲーション

`as` prop を使用して、ナビゲーション要素としてレンダリングできます。

```tsx
<Cluster as="nav" gap="md">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/products">Products</a>
  <a href="/contact">Contact</a>
</Cluster>
```

## タグリスト

```tsx
<Cluster gap="xs">
  {tags.map(tag => (
    <span key={tag} className="tag">{tag}</span>
  ))}
</Cluster>
```

## CSS変数

Cluster コンポーネントは以下のCSS変数を使用しています。

| 変数名 | 説明 |
|--------|------|
| `--cluster-gap` | アイテム間のギャップ |
| `--cluster-justify` | 主軸方向の配置 |
| `--cluster-align` | 交差軸方向の配置 |
