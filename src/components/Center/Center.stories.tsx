import type { Meta, StoryObj } from '@storybook/react-vite';
import { Center } from './Center';
import { Box } from '../Box/Box';

const meta: Meta<typeof Center> = {
  title: 'Layout Primitives/Center',
  component: Center,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Centerはコンテンツを水平方向に中央揃えし、最大幅を制限するコンポーネントです。読みやすいテキスト幅を維持するために使用します。',
      },
    },
  },
  argTypes: {
    max: {
      control: 'select',
      options: ['narrow', 'base', 'wide'],
      description: '最大幅。トークン値またはCSS値を指定可能',
    },
    gutters: {
      control: 'select',
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: '左右の余白（ガター）',
    },
    intrinsic: {
      control: 'boolean',
      description: 'trueにするとコンテンツの自然な幅に基づいて中央揃え',
    },
    as: {
      control: 'select',
      options: ['div', 'main', 'article', 'section'],
      description: 'レンダリングするHTML要素',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Center>;

export const Default: Story = {
  render: (args) => (
    <Center {...args}>
      <Box padding="md" borderWidth="1px">
        <p>
          This content is horizontally centered with a maximum width. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
      </Box>
    </Center>
  ),
  args: {
    max: 'base',
  },
};

export const Narrow: Story = {
  render: (args) => (
    <Center {...args}>
      <Box padding="md" borderWidth="1px">
        <p>
          Narrow centered content - ideal for focused reading. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </Box>
    </Center>
  ),
  args: {
    max: 'narrow',
  },
};

export const Wide: Story = {
  render: (args) => (
    <Center {...args}>
      <Box padding="md" borderWidth="1px">
        <p>
          Wide centered content - good for layouts with more horizontal space. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
      </Box>
    </Center>
  ),
  args: {
    max: 'wide',
  },
};

export const WithGutters: Story = {
  render: (args) => (
    <div style={{ backgroundColor: '#f3f4f6' }}>
      <Center {...args}>
        <Box padding="md" borderWidth="1px" style={{ backgroundColor: 'white' }}>
          <p>
            Content with gutters (padding on the sides). Resize the window to see how the gutters
            provide spacing at narrow widths.
          </p>
        </Box>
      </Center>
    </div>
  ),
  args: {
    max: 'base',
    gutters: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story:
          'gutters propを使用すると、ウィンドウ幅が狭くなった際にも左右に余白が確保されます。',
      },
    },
  },
};

export const Intrinsic: Story = {
  render: (args) => (
    <Center {...args}>
      <Box padding="md" borderWidth="1px" style={{ display: 'inline-block' }}>
        <p>Intrinsically centered</p>
      </Box>
    </Center>
  ),
  args: {
    intrinsic: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'intrinsic propを使用すると、コンテンツの自然な幅に基づいて中央揃えされます。コンテンツがmaxより小さい場合に便利です。',
      },
    },
  },
};

export const CustomMaxWidth: Story = {
  render: (args) => (
    <Center {...args}>
      <Box padding="md" borderWidth="1px">
        <p>Content with a custom max-width of 800px.</p>
      </Box>
    </Center>
  ),
  args: {
    max: '800px',
  },
};

export const AsMain: Story = {
  render: (args) => (
    <Center {...args}>
      <Box padding="lg" borderWidth="1px">
        <h1>Main Content Area</h1>
        <p>
          This Center component renders as a {'<main>'} element, providing semantic meaning for the
          page's primary content.
        </p>
      </Box>
    </Center>
  ),
  args: {
    as: 'main',
    max: 'base',
  },
};
