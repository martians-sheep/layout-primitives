---
title: Frame
description: アスペクト比を維持するコンテナを提供するコンポーネント
---

# Frame

Frame はアスペクト比を維持するコンテナを提供するコンポーネントです。画像、動画、iframe など、一定のアスペクト比を維持したいコンテンツに最適です。

## 基本的な使い方

```tsx
import { Frame } from '@martians-sheep/layout-primitives';

<Frame ratio="widescreen">
  <img src="video-thumbnail.jpg" alt="" />
</Frame>
```

## Props

| Prop | 型 | デフォルト | 説明 |
|------|-----|-----------|------|
| `ratio` | `RatioValue` | `"widescreen"` | アスペクト比 |
| `as` | `ElementType` | `"div"` | レンダリングするHTML要素 |

## アスペクト比トークン

| トークン | 比率 | 用途 |
|---------|------|------|
| `square` | 1:1 | プロフィール画像、アイコン |
| `landscape` | 4:3 | 標準写真 |
| `widescreen` | 16:9 | 動画、YouTube |
| `ultrawide` | 21:9 | シネマティック |
| `portrait` | 3:4 | ポートレート写真 |
| `golden` | 1.618:1 | 黄金比 |

```tsx
// 正方形
<Frame ratio="square">...</Frame>

// ワイドスクリーン（16:9）
<Frame ratio="widescreen">...</Frame>

// ポートレート
<Frame ratio="portrait">...</Frame>
```

## カスタム比率

```tsx
// 3:2
<Frame ratio="3/2">...</Frame>

// 2.35:1（シネスコ）
<Frame ratio="2.35">...</Frame>
```

## 画像の表示

Frame 内の画像は `object-fit: cover` を使用して、アスペクト比を維持しながらフレームを埋めます。

```tsx
<Frame ratio="widescreen">
  <img
    src="photo.jpg"
    alt=""
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</Frame>
```

:::tip
`object-fit: cover` は画像を切り抜いてフレームを埋めます。`object-fit: contain` を使用すると、画像全体が表示されますが余白ができる場合があります。
:::

## 動画の埋め込み

```tsx
<Frame ratio="widescreen">
  <iframe
    src="https://www.youtube.com/embed/..."
    title="Video"
    style={{ width: '100%', height: '100%', border: 'none' }}
    allowFullScreen
  />
</Frame>
```

## 画像ギャラリー

Grid と組み合わせて、統一されたアスペクト比の画像ギャラリーを作成できます。

```tsx
<Grid minItemWidth="200px" gap="sm">
  {images.map((src, i) => (
    <Frame key={i} ratio="square">
      <img
        src={src}
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Frame>
  ))}
</Grid>
```

## プレースホルダー

画像が読み込まれるまでの間、アスペクト比を維持したプレースホルダーとして使用できます。

```tsx
<Frame ratio="widescreen">
  <div style={{
    width: '100%',
    height: '100%',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    Loading...
  </div>
</Frame>
```

## CSS変数

Frame コンポーネントは以下のCSS変数を使用しています。

| 変数名 | 説明 |
|--------|------|
| `--frame-ratio` | アスペクト比 |

```css
/* カスタムアスペクト比 */
.my-frame {
  --frame-ratio: 2.35;
}
```
