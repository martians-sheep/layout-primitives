import type { Meta, StoryObj } from '@storybook/react-vite';
import { Cluster } from './Cluster';
import { Box } from '../Box/Box';

const meta: Meta<typeof Cluster> = {
  title: 'Layout Primitives/Cluster',
  component: Cluster,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Clusterはフレキシブルにラップする要素群を配置するコンポーネントです。タグ、ボタングループ、ナビゲーションリンクなど、水平方向に並べたいアイテムに最適です。',
      },
    },
  },
  argTypes: {
    gap: {
      control: 'select',
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'アイテム間のギャップ',
    },
    justify: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      description: '主軸方向の配置',
    },
    align: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      description: '交差軸方向の配置',
    },
    as: {
      control: 'select',
      options: ['div', 'nav', 'ul', 'ol'],
      description: 'レンダリングするHTML要素',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Cluster>;

const Tag = ({ children }: { children: React.ReactNode }) => (
  <Box padding="xs" style={{ backgroundColor: '#dbeafe', borderRadius: '4px' }}>
    {children}
  </Box>
);

export const Default: Story = {
  render: (args) => (
    <Cluster {...args}>
      <Tag>React</Tag>
      <Tag>TypeScript</Tag>
      <Tag>CSS</Tag>
      <Tag>JavaScript</Tag>
      <Tag>HTML</Tag>
    </Cluster>
  ),
  args: {
    gap: 'sm',
  },
};

export const SmallGap: Story = {
  render: (args) => (
    <Cluster {...args}>
      <Tag>Tag 1</Tag>
      <Tag>Tag 2</Tag>
      <Tag>Tag 3</Tag>
      <Tag>Tag 4</Tag>
      <Tag>Tag 5</Tag>
    </Cluster>
  ),
  args: {
    gap: 'xs',
  },
};

export const LargeGap: Story = {
  render: (args) => (
    <Cluster {...args}>
      <Tag>Item 1</Tag>
      <Tag>Item 2</Tag>
      <Tag>Item 3</Tag>
    </Cluster>
  ),
  args: {
    gap: 'xl',
  },
};

export const Centered: Story = {
  render: (args) => (
    <Cluster {...args}>
      <Tag>Centered</Tag>
      <Tag>Items</Tag>
      <Tag>In</Tag>
      <Tag>Cluster</Tag>
    </Cluster>
  ),
  args: {
    gap: 'md',
    justify: 'center',
  },
};

export const SpaceBetween: Story = {
  render: (args) => (
    <Cluster {...args}>
      <Tag>Left</Tag>
      <Tag>Center</Tag>
      <Tag>Right</Tag>
    </Cluster>
  ),
  args: {
    gap: 'md',
    justify: 'space-between',
  },
  parameters: {
    docs: {
      description: {
        story: 'justify="space-between"を使用すると、アイテム間のスペースが均等に分配されます。',
      },
    },
  },
};

export const AlignEnd: Story = {
  render: (args) => (
    <Cluster {...args}>
      <Box padding="sm" style={{ backgroundColor: '#dbeafe', height: '60px' }}>
        Tall
      </Box>
      <Tag>Short</Tag>
      <Tag>Items</Tag>
    </Cluster>
  ),
  args: {
    gap: 'md',
    align: 'flex-end',
  },
};

export const Wrapping: Story = {
  render: (args) => (
    <div style={{ maxWidth: '400px', border: '1px dashed #ccc', padding: '1rem' }}>
      <Cluster {...args}>
        <Tag>React</Tag>
        <Tag>TypeScript</Tag>
        <Tag>CSS</Tag>
        <Tag>JavaScript</Tag>
        <Tag>HTML</Tag>
        <Tag>Node.js</Tag>
        <Tag>GraphQL</Tag>
        <Tag>REST API</Tag>
      </Cluster>
    </div>
  ),
  args: {
    gap: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Clusterは自動的にラップします。コンテナの幅を超えるとアイテムは次の行に折り返されます。',
      },
    },
  },
};

export const AsNavigation: Story = {
  render: (args) => (
    <Cluster {...args}>
      <a href="#" style={{ textDecoration: 'none' }}>
        <Tag>Home</Tag>
      </a>
      <a href="#" style={{ textDecoration: 'none' }}>
        <Tag>About</Tag>
      </a>
      <a href="#" style={{ textDecoration: 'none' }}>
        <Tag>Services</Tag>
      </a>
      <a href="#" style={{ textDecoration: 'none' }}>
        <Tag>Contact</Tag>
      </a>
    </Cluster>
  ),
  args: {
    as: 'nav',
    gap: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'as="nav"を使用して、ナビゲーション要素としてレンダリングできます。',
      },
    },
  },
};
