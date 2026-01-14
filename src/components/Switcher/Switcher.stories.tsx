import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switcher } from './Switcher';
import { Box } from '../Box/Box';

const meta: Meta<typeof Switcher> = {
  title: 'Layout Primitives/Switcher',
  component: Switcher,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Switcherは閾値ベースでレイアウトを切り替えるコンポーネントです。コンテナの幅が閾値より広い場合は水平レイアウト、狭い場合は垂直レイアウトに自動的に切り替わります。',
      },
    },
  },
  argTypes: {
    threshold: {
      control: 'text',
      description: 'レイアウト切り替えの閾値',
    },
    gap: {
      control: 'select',
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'アイテム間のギャップ',
    },
    limit: {
      control: 'select',
      options: [undefined, 2, 3, 4, 5],
      description: '1行あたりの最大アイテム数',
    },
    as: {
      control: 'select',
      options: ['div', 'section', 'ul'],
      description: 'レンダリングするHTML要素',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switcher>;

const SwitcherItem = ({ children }: { children: React.ReactNode }) => (
  <Box padding="md" style={{ backgroundColor: '#fce7f3', border: '1px solid #ec4899' }}>
    {children}
  </Box>
);

export const Default: Story = {
  render: (args) => (
    <Switcher {...args}>
      <SwitcherItem>Item 1</SwitcherItem>
      <SwitcherItem>Item 2</SwitcherItem>
      <SwitcherItem>Item 3</SwitcherItem>
    </Switcher>
  ),
  args: {
    threshold: '30rem',
    gap: 'md',
  },
};

export const NarrowThreshold: Story = {
  render: (args) => (
    <Switcher {...args}>
      <SwitcherItem>A</SwitcherItem>
      <SwitcherItem>B</SwitcherItem>
      <SwitcherItem>C</SwitcherItem>
    </Switcher>
  ),
  args: {
    threshold: '20rem',
    gap: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: '閾値が小さいほど、より狭い画面でも水平レイアウトが維持されます。',
      },
    },
  },
};

export const WideThreshold: Story = {
  render: (args) => (
    <Switcher {...args}>
      <SwitcherItem>Item 1</SwitcherItem>
      <SwitcherItem>Item 2</SwitcherItem>
      <SwitcherItem>Item 3</SwitcherItem>
    </Switcher>
  ),
  args: {
    threshold: '50rem',
    gap: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: '閾値が大きいほど、より広い画面でないと水平レイアウトになりません。',
      },
    },
  },
};

export const WithLimit: Story = {
  render: (args) => (
    <Switcher {...args}>
      <SwitcherItem>1</SwitcherItem>
      <SwitcherItem>2</SwitcherItem>
      <SwitcherItem>3</SwitcherItem>
      <SwitcherItem>4</SwitcherItem>
      <SwitcherItem>5</SwitcherItem>
      <SwitcherItem>6</SwitcherItem>
    </Switcher>
  ),
  args: {
    threshold: '30rem',
    gap: 'md',
    limit: 3,
  },
  parameters: {
    docs: {
      description: {
        story:
          'limit propを使用すると、指定した数を超えるアイテムがある場合、全幅で表示されます。',
      },
    },
  },
};

export const TwoColumns: Story = {
  render: (args) => (
    <Switcher {...args}>
      <SwitcherItem>Left Column</SwitcherItem>
      <SwitcherItem>Right Column</SwitcherItem>
    </Switcher>
  ),
  args: {
    threshold: '25rem',
    gap: 'lg',
  },
};

export const FormLayout: Story = {
  render: (args) => (
    <Box padding="lg" borderWidth="1px">
      <h3 style={{ margin: '0 0 1rem 0' }}>Contact Form</h3>
      <Switcher {...args}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem' }}>First Name</label>
          <input type="text" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem' }}>Last Name</label>
          <input type="text" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
      </Switcher>
      <div style={{ marginTop: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.25rem' }}>Message</label>
        <textarea style={{ width: '100%', padding: '0.5rem', minHeight: '100px' }} />
      </div>
    </Box>
  ),
  args: {
    threshold: '25rem',
    gap: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'フォームフィールドを横並びにする例。狭い画面では縦並びに切り替わります。',
      },
    },
  },
};

export const PricingCards: Story = {
  render: (args) => (
    <Switcher {...args}>
      <Box padding="lg" borderWidth="1px" style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Basic</h3>
        <p style={{ fontSize: '2rem', margin: '0 0 1rem 0' }}>$9/mo</p>
        <p style={{ color: '#6b7280' }}>For individuals</p>
      </Box>
      <Box padding="lg" borderWidth="2px" style={{ textAlign: 'center', borderColor: '#6366f1' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Pro</h3>
        <p style={{ fontSize: '2rem', margin: '0 0 1rem 0' }}>$29/mo</p>
        <p style={{ color: '#6b7280' }}>For professionals</p>
      </Box>
      <Box padding="lg" borderWidth="1px" style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Enterprise</h3>
        <p style={{ fontSize: '2rem', margin: '0 0 1rem 0' }}>$99/mo</p>
        <p style={{ color: '#6b7280' }}>For teams</p>
      </Box>
    </Switcher>
  ),
  args: {
    threshold: '40rem',
    gap: 'lg',
    limit: 3,
  },
  parameters: {
    docs: {
      description: {
        story: '価格カードのレイアウト例。',
      },
    },
  },
};
