import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Layout Primitives/Box',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Boxはパディングとボーダーを持つシンプルなコンテナコンポーネントです。コンテンツを囲むための基本的なビルディングブロックとして使用します。',
      },
    },
  },
  argTypes: {
    padding: {
      control: 'select',
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: '内側の余白。トークン値またはCSS値を指定可能',
    },
    borderWidth: {
      control: 'text',
      description: 'ボーダーの太さ',
    },
    invert: {
      control: 'boolean',
      description: '色を反転（ダークテーマ風）',
    },
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'aside', 'header', 'footer'],
      description: 'レンダリングするHTML要素',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: 'This is a basic Box with default padding.',
    padding: 'md',
  },
};

export const SmallPadding: Story = {
  args: {
    children: 'Compact Box with small padding.',
    padding: 'sm',
  },
};

export const LargePadding: Story = {
  args: {
    children: 'Spacious Box with large padding.',
    padding: 'xl',
  },
};

export const WithBorder: Story = {
  args: {
    children: 'Box with a visible border.',
    padding: 'md',
    borderWidth: '2px',
  },
};

export const Inverted: Story = {
  args: {
    children: 'Inverted Box with dark background.',
    padding: 'md',
    invert: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'invert propを使用すると、背景色とテキスト色が反転します。',
      },
    },
  },
};

export const CustomCSSPadding: Story = {
  args: {
    children: 'Box with custom CSS padding value.',
    padding: '3rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'トークン以外の任意のCSS値も使用できます。',
      },
    },
  },
};

export const Nested: Story = {
  render: () => (
    <Box padding="lg" borderWidth="1px">
      <p>Outer Box</p>
      <Box padding="md" borderWidth="1px" style={{ marginTop: '1rem' }}>
        <p>Inner Box</p>
        <Box padding="sm" borderWidth="1px" style={{ marginTop: '1rem' }}>
          <p>Deeply nested Box</p>
        </Box>
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Boxはネストして使用することで、階層的なレイアウトを構築できます。',
      },
    },
  },
};

export const AsSection: Story = {
  args: {
    as: 'section',
    children: 'This Box renders as a <section> element.',
    padding: 'lg',
    borderWidth: '1px',
  },
};
