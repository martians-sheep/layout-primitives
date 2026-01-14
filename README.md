# @martians-sheep/layout-primitives

[Every Layout](https://every-layout.dev/) の思想に基づいた React レイアウトコンポーネントライブラリです。

メディアクエリに頼らず、CSS の本来の力（Flexbox、Grid、CSS Custom Properties）を活用した **Intrinsic Design** を実現します。

## 特徴

- **Intrinsic Design** - コンテナ幅に応じて自然に適応するレイアウト
- **コンポジション** - シンプルなプリミティブを組み合わせて複雑なレイアウトを構築
- **TypeScript 対応** - 完全な型定義付き
- **Tree-shakable** - コンポーネントごとに CSS が分離、使用するものだけがバンドルに含まれる
- **Polymorphic** - `as` prop で任意の HTML 要素としてレンダリング可能

## インストール

```bash
npm install @martians-sheep/layout-primitives
```

## セットアップ

CSS トークンをグローバルに読み込みます：

```tsx
// main.tsx または App.tsx
import '@martians-sheep/layout-primitives/styles/tokens';
```

## 使い方

```tsx
import { Stack, Box, Center, Cluster, Grid } from '@martians-sheep/layout-primitives';

function App() {
  return (
    <Center max="base" gutters="md">
      <Stack space="lg">
        <h1>タイトル</h1>
        <Cluster gap="sm">
          <span className="tag">React</span>
          <span className="tag">TypeScript</span>
        </Cluster>
        <Box padding="md" borderWidth="1px">
          コンテンツ
        </Box>
      </Stack>
    </Center>
  );
}
```

## コンポーネント

### Stack

垂直方向に要素を積み重ね、均等なスペースを確保します。

```tsx
<Stack space="md">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>
```

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `space` | `SpaceValue` | `"md"` | 要素間のスペース |
| `recursive` | `boolean` | `false` | 全ての子孫要素にスペースを適用 |
| `splitAfter` | `1-5` | - | 指定インデックス以降を下部に押しやる |

### Box

パディングとボーダーを持つコンテナです。

```tsx
<Box padding="lg" borderWidth="1px">
  コンテンツ
</Box>
```

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `padding` | `SpaceValue` | `"md"` | 内側の余白 |
| `borderWidth` | `string` | `"0"` | ボーダーの太さ |
| `invert` | `boolean` | `false` | 色を反転 |

### Center

コンテンツを水平方向に中央揃えし、最大幅を制限します。

```tsx
<Center max="base" gutters="md">
  <p>中央揃えされたコンテンツ</p>
</Center>
```

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `max` | `MeasureValue` | `"base"` | 最大幅 |
| `gutters` | `SpaceValue` | - | 左右の余白 |
| `intrinsic` | `boolean` | `false` | コンテンツの自然な幅で中央揃え |

### Cluster

フレキシブルにラップする要素群を配置します。

```tsx
<Cluster gap="sm" justify="center">
  <span>Tag 1</span>
  <span>Tag 2</span>
</Cluster>
```

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `gap` | `SpaceValue` | `"md"` | アイテム間のギャップ |
| `justify` | `string` | `"flex-start"` | 主軸方向の配置 |
| `align` | `string` | `"center"` | 交差軸方向の配置 |

### Grid

CSS Grid による自動レイアウトを提供します。

```tsx
<Grid minItemWidth="250px" gap="md">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</Grid>
```

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `minItemWidth` | `string` | `"250px"` | 各アイテムの最小幅 |
| `gap` | `SpaceValue` | `"md"` | グリッドアイテム間のギャップ |

### Sidebar

2 カラムレイアウトを提供します。

```tsx
<Sidebar sideWidth="200px" gap="md">
  <aside>サイドバー</aside>
  <main>メインコンテンツ</main>
</Sidebar>
```

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `side` | `"left" \| "right"` | `"left"` | サイドバーの位置 |
| `sideWidth` | `string` | `"20rem"` | サイドバーの幅 |
| `contentMin` | `string` | `"50%"` | メインコンテンツの最小幅 |
| `gap` | `SpaceValue` | `"md"` | ギャップ |

### Switcher

閾値ベースでレイアウトを切り替えます。

```tsx
<Switcher threshold="30rem" gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
</Switcher>
```

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `threshold` | `string` | `"30rem"` | 切り替えの閾値 |
| `gap` | `SpaceValue` | `"md"` | ギャップ |
| `limit` | `2-5` | - | 1 行の最大アイテム数 |

### Cover

全画面高さのレイアウトを提供します。

```tsx
<Cover minHeight="100vh">
  <header>Header</header>
  <main data-centered>中央コンテンツ</main>
  <footer>Footer</footer>
</Cover>
```

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `minHeight` | `string` | `"100vh"` | 最小高さ |
| `padding` | `SpaceValue` | `"md"` | パディング |
| `noPad` | `boolean` | `false` | パディングを削除 |

### Frame

アスペクト比を維持するコンテナを提供します。

```tsx
<Frame ratio="widescreen">
  <img src="video.jpg" alt="" />
</Frame>
```

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `ratio` | `RatioValue` | `"widescreen"` | アスペクト比 |

## デザイントークン

### スペーシング

`3xs`, `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`

### 最大幅（Measure）

`narrow` (45ch), `base` (65ch), `wide` (80ch)

### アスペクト比

`square`, `landscape`, `widescreen`, `ultrawide`, `portrait`, `golden`

トークン以外にも、任意の CSS 値を直接指定できます：

```tsx
<Stack space="2.5rem">...</Stack>
<Center max="800px">...</Center>
<Frame ratio="3/2">...</Frame>
```

## Polymorphic Components

すべてのコンポーネントは `as` prop をサポートしています：

```tsx
<Stack as="ul" space="sm">
  <li>Item 1</li>
  <li>Item 2</li>
</Stack>

<Center as="main" max="base">
  <p>メインコンテンツ</p>
</Center>
```

## 開発

```bash
# 開発サーバー
npm run dev

# テスト
npm run test

# Storybook
npm run storybook

# ドキュメントサイト
npm run docs:dev

# ビルド
npm run build
```

## 必要な環境

- React 18.0.0 以上、または React 19.0.0 以上
- TypeScript 5.0 以上（推奨）

## ライセンス

MIT
