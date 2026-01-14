import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from './Stack';
import { Box } from '../Box/Box';

const meta: Meta<typeof Stack> = {
  title: 'Layout Primitives/Stack',
  component: Stack,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stackは垂直方向にスペースを確保するためのコンポーネントです。Owl selector (`* + *`) パターンを使用し、要素間に均等なスペースを提供します。',
      },
    },
  },
  argTypes: {
    space: {
      control: 'select',
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: '要素間のスペース。トークン値またはCSS値を指定可能',
    },
    recursive: {
      control: 'boolean',
      description: 'trueにすると全ての子孫要素にスペースを適用',
    },
    splitAfter: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 5],
      description: '指定したインデックス以降の要素を下部に押しやる',
    },
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'ul', 'ol'],
      description: 'レンダリングするHTML要素',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const DemoBox = ({ children }: { children: React.ReactNode }) => (
  <Box padding="sm" style={{ backgroundColor: '#e0e7ff', border: '1px solid #6366f1' }}>
    {children}
  </Box>
);

export const Default: Story = {
  render: (args) => (
    <Stack {...args}>
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
    </Stack>
  ),
  args: {
    space: 'md',
  },
};

export const SmallSpace: Story = {
  render: (args) => (
    <Stack {...args}>
      <DemoBox>Compact Item 1</DemoBox>
      <DemoBox>Compact Item 2</DemoBox>
      <DemoBox>Compact Item 3</DemoBox>
    </Stack>
  ),
  args: {
    space: 'xs',
  },
};

export const LargeSpace: Story = {
  render: (args) => (
    <Stack {...args}>
      <DemoBox>Spacious Item 1</DemoBox>
      <DemoBox>Spacious Item 2</DemoBox>
      <DemoBox>Spacious Item 3</DemoBox>
    </Stack>
  ),
  args: {
    space: 'xl',
  },
};

export const Recursive: Story = {
  render: (args) => (
    <Stack {...args}>
      <DemoBox>Parent Item 1</DemoBox>
      <div>
        <DemoBox>Nested Item 1</DemoBox>
        <DemoBox>Nested Item 2</DemoBox>
      </div>
      <DemoBox>Parent Item 2</DemoBox>
    </Stack>
  ),
  args: {
    space: 'md',
    recursive: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'recursiveをtrueにすると、ネストした要素にもスペースが適用されます。',
      },
    },
  },
};

export const SplitAfter: Story = {
  render: (args) => (
    <Stack {...args} style={{ minHeight: '300px' }}>
      <DemoBox>Header</DemoBox>
      <DemoBox>Main Content</DemoBox>
      <DemoBox>Footer (pushed to bottom)</DemoBox>
    </Stack>
  ),
  args: {
    space: 'md',
    splitAfter: 2,
  },
  parameters: {
    docs: {
      description: {
        story:
          'splitAfterを使用すると、指定したインデックス以降の要素をコンテナの下部に押しやることができます。スティッキーフッターのようなレイアウトに便利です。',
      },
    },
  },
};

export const WithCustomCSSValue: Story = {
  render: (args) => (
    <Stack {...args}>
      <DemoBox>Custom spacing 1</DemoBox>
      <DemoBox>Custom spacing 2</DemoBox>
      <DemoBox>Custom spacing 3</DemoBox>
    </Stack>
  ),
  args: {
    space: '2.5rem',
  },
  parameters: {
    docs: {
      description: {
        story: 'トークン以外にも、任意のCSS値を指定できます。',
      },
    },
  },
};

export const AsList: Story = {
  render: (args) => (
    <Stack {...args}>
      <li>
        <DemoBox>List Item 1</DemoBox>
      </li>
      <li>
        <DemoBox>List Item 2</DemoBox>
      </li>
      <li>
        <DemoBox>List Item 3</DemoBox>
      </li>
    </Stack>
  ),
  args: {
    as: 'ul',
    space: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'as propを使用して、任意のHTML要素としてレンダリングできます。',
      },
    },
  },
};
