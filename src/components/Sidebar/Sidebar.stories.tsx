import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sidebar } from './Sidebar';
import { Box } from '../Box/Box';

const meta: Meta<typeof Sidebar> = {
  title: 'Layout Primitives/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Sidebarは2カラムレイアウトを提供するコンポーネントです。片方が固定幅のサイドバー、もう片方がフレキシブルなメインコンテンツエリアとなります。コンテナが狭くなると自動的にスタック表示に切り替わります。',
      },
    },
  },
  argTypes: {
    side: {
      control: 'select',
      options: ['left', 'right'],
      description: 'サイドバーの位置',
    },
    sideWidth: {
      control: 'text',
      description: 'サイドバーの幅',
    },
    contentMin: {
      control: 'text',
      description: 'メインコンテンツの最小幅（これを下回るとスタック表示）',
    },
    gap: {
      control: 'select',
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'サイドバーとコンテンツ間のギャップ',
    },
    noStretch: {
      control: 'boolean',
      description: 'trueにするとアイテムを高さいっぱいに伸ばさない',
    },
    as: {
      control: 'select',
      options: ['div', 'aside', 'section'],
      description: 'レンダリングするHTML要素',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: (args) => (
    <Sidebar {...args}>
      <Box padding="md" style={{ backgroundColor: '#e0e7ff' }}>
        Sidebar
      </Box>
      <Box padding="md" style={{ backgroundColor: '#f3f4f6' }}>
        Main content area that takes up the remaining space. This area will expand to fill the
        available width.
      </Box>
    </Sidebar>
  ),
  args: {
    side: 'left',
    sideWidth: '200px',
    gap: 'md',
  },
};

export const RightSidebar: Story = {
  render: (args) => (
    <Sidebar {...args}>
      <Box padding="md" style={{ backgroundColor: '#f3f4f6' }}>
        Main content on the left side.
      </Box>
      <Box padding="md" style={{ backgroundColor: '#e0e7ff' }}>
        Sidebar on right
      </Box>
    </Sidebar>
  ),
  args: {
    side: 'right',
    sideWidth: '200px',
    gap: 'md',
  },
};

export const WiderSidebar: Story = {
  render: (args) => (
    <Sidebar {...args}>
      <Box padding="md" style={{ backgroundColor: '#e0e7ff' }}>
        <h3 style={{ margin: '0 0 1rem 0' }}>Navigation</h3>
        <ul style={{ margin: 0, padding: '0 0 0 1rem' }}>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </Box>
      <Box padding="md" style={{ backgroundColor: '#f3f4f6' }}>
        Main content area
      </Box>
    </Sidebar>
  ),
  args: {
    side: 'left',
    sideWidth: '250px',
    gap: 'lg',
  },
};

export const IntrinsicWidth: Story = {
  render: (args) => (
    <Sidebar {...args}>
      <Box padding="md" style={{ backgroundColor: '#e0e7ff', whiteSpace: 'nowrap' }}>
        Auto-width sidebar
      </Box>
      <Box padding="md" style={{ backgroundColor: '#f3f4f6' }}>
        The sidebar width is determined by its content.
      </Box>
    </Sidebar>
  ),
  args: {
    side: 'left',
    sideWidth: 'auto',
    gap: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'sideWidth="auto"を使用すると、サイドバーの幅はコンテンツに基づいて決定されます。',
      },
    },
  },
};

export const NoStretch: Story = {
  render: (args) => (
    <Sidebar {...args}>
      <Box padding="md" style={{ backgroundColor: '#e0e7ff' }}>
        Short sidebar
      </Box>
      <Box padding="md" style={{ backgroundColor: '#f3f4f6' }}>
        <p>Tall content area</p>
        <p>with multiple lines</p>
        <p>of text content</p>
        <p>to demonstrate</p>
        <p>the noStretch prop</p>
      </Box>
    </Sidebar>
  ),
  args: {
    side: 'left',
    sideWidth: '200px',
    gap: 'md',
    noStretch: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'noStretch propを使用すると、サイドバーはコンテンツの高さに合わせて伸縮しません。',
      },
    },
  },
};

export const DashboardLayout: Story = {
  render: (args) => (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
      <Sidebar {...args}>
        <Box padding="md" style={{ backgroundColor: '#1f2937', color: 'white', minHeight: '400px' }}>
          <h3 style={{ margin: '0 0 1rem 0' }}>Dashboard</h3>
          <nav>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ padding: '0.5rem 0' }}>📊 Analytics</li>
              <li style={{ padding: '0.5rem 0' }}>👤 Users</li>
              <li style={{ padding: '0.5rem 0' }}>⚙️ Settings</li>
              <li style={{ padding: '0.5rem 0' }}>📁 Projects</li>
            </ul>
          </nav>
        </Box>
        <Box padding="lg" style={{ backgroundColor: '#f9fafb' }}>
          <h2 style={{ margin: '0 0 1rem 0' }}>Welcome to Dashboard</h2>
          <p>This is the main content area of your dashboard.</p>
        </Box>
      </Sidebar>
    </div>
  ),
  args: {
    side: 'left',
    sideWidth: '220px',
    gap: '0',
  },
  parameters: {
    docs: {
      description: {
        story: 'ダッシュボードレイアウトの例。サイドバーにナビゲーションを配置しています。',
      },
    },
  },
};

export const ResponsiveBehavior: Story = {
  render: (args) => (
    <div style={{ border: '1px dashed #ccc', padding: '1rem' }}>
      <p style={{ marginBottom: '1rem', color: '#6b7280', fontSize: '0.875rem' }}>
        ウィンドウ幅を狭めると、レイアウトが自動的にスタック表示に切り替わります。
      </p>
      <Sidebar {...args}>
        <Box padding="md" style={{ backgroundColor: '#dbeafe' }}>
          Sidebar
        </Box>
        <Box padding="md" style={{ backgroundColor: '#f3f4f6' }}>
          Main content - try resizing the window!
        </Box>
      </Sidebar>
    </div>
  ),
  args: {
    side: 'left',
    sideWidth: '200px',
    contentMin: '60%',
    gap: 'md',
  },
  parameters: {
    docs: {
      description: {
        story:
          'contentMinで指定した幅を下回ると、レイアウトは自動的にスタック表示に切り替わります。',
      },
    },
  },
};
