---
title: 導入
description: Layout Primitives の概要と設計思想
---

# Layout Primitives

Layout Primitives は、[Every Layout](https://every-layout.dev/) の思想に基づいた React レイアウトコンポーネントライブラリです。

## 設計思想

### Intrinsic Design（内在的デザイン）

従来のレスポンシブデザインはメディアクエリに依存していますが、これはビューポート幅に基づいた設計です。Intrinsic Design では、**コンテナの幅**や**コンテンツの特性**に基づいてレイアウトが自然に適応します。

```css
/* 従来のアプローチ */
@media (min-width: 768px) {
  .container {
    display: flex;
  }
}

/* Intrinsic Design */
.switcher {
  display: flex;
  flex-wrap: wrap;
}
.switcher > * {
  flex-grow: 1;
  flex-basis: calc((30rem - 100%) * 999);
}
```

### Composition over Configuration

複雑なレイアウトを1つの巨大なコンポーネントで実現するのではなく、シンプルなプリミティブを組み合わせて構築します。

```tsx
<Center maxWidth="base">
  <Stack space="lg">
    <Cluster gap="sm">
      <Tag>React</Tag>
      <Tag>TypeScript</Tag>
    </Cluster>
    <h1>記事タイトル</h1>
    <p>本文...</p>
  </Stack>
</Center>
```

### CSS Custom Properties

カスタマイズは props と CSS 変数の両方で可能です。

```tsx
// props でカスタマイズ
<Stack space="lg">...</Stack>

// CSS 変数でカスタマイズ
<Stack style={{ '--stack-space': '3rem' }}>...</Stack>
```

## 9つのプリミティブ

| コンポーネント | 用途 |
|--------------|------|
| **Stack** | 垂直方向のスペーシング（owl selector パターン） |
| **Box** | パディングとボーダーを持つコンテナ |
| **Center** | 水平中央揃え + max-width |
| **Cluster** | フレキシブルにラップするアイテム群 |
| **Grid** | CSS Grid (auto-fill) による自動レイアウト |
| **Sidebar** | 2カラムレイアウト（片方固定幅） |
| **Switcher** | 閾値ベースのレスポンシブ切り替え |
| **Cover** | 全画面高さ + 中央コンテンツ |
| **Frame** | アスペクト比を維持するコンテナ |

## Polymorphic Components

すべてのコンポーネントは `as` prop をサポートしており、任意の HTML 要素としてレンダリングできます。

```tsx
<Stack as="ul" space="sm">
  <li>Item 1</li>
  <li>Item 2</li>
</Stack>

<Center as="main" maxWidth="base">
  <p>メインコンテンツ</p>
</Center>
```
