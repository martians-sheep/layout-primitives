---
title: インストール
description: Layout Primitives のインストール方法
---

# インストール

## パッケージのインストール

```bash
npm install @martians-sheep/layout-primitives
```

## CSSトークンの読み込み

グローバルスタイルで CSS トークンを読み込みます。

```tsx
// main.tsx または App.tsx
import '@martians-sheep/layout-primitives/styles/tokens';
```

または、個別に読み込むことも可能です。

```tsx
import '@martians-sheep/layout-primitives/styles';
```

## コンポーネントのインポート

```tsx
import { Stack, Box, Center, Cluster, Grid } from '@martians-sheep/layout-primitives';

function App() {
  return (
    <Center maxWidth="base">
      <Stack space="lg">
        <h1>Hello World</h1>
        <Box padding="md" borderWidth="1px">
          コンテンツ
        </Box>
      </Stack>
    </Center>
  );
}
```

## 必要な環境

- React 18.0.0 以上、または React 19.0.0 以上
- TypeScript 5.0 以上（推奨）

## CSS のカスタマイズ

デザイントークンは CSS Custom Properties として定義されています。プロジェクトの要件に合わせてオーバーライドできます。

```css
:root {
  /* スペーシングのカスタマイズ */
  --space-md: 1.5rem;

  /* 最大幅のカスタマイズ */
  --measure-base: 70ch;
}
```

詳しくは[デザイントークン](/guides/tokens/)を参照してください。
