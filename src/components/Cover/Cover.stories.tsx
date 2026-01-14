import type { Meta, StoryObj } from '@storybook/react-vite';
import { Cover } from './Cover';
import { Box } from '../Box/Box';
import { Center } from '../Center/Center';

const meta: Meta<typeof Cover> = {
  title: 'Layout Primitives/Cover',
  component: Cover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Coverは全画面高さのレイアウトを提供し、中央に配置したいコンテンツを垂直方向に中央揃えします。ヒーローセクションやランディングページに最適です。data-centered属性を持つ子要素が垂直方向の中央に配置されます。',
      },
    },
  },
  argTypes: {
    minHeight: {
      control: 'text',
      description: 'カバーの最小高さ',
    },
    padding: {
      control: 'select',
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'カバー内のパディング',
    },
    noPad: {
      control: 'boolean',
      description: 'パディングを削除',
    },
    as: {
      control: 'select',
      options: ['div', 'section', 'main', 'header'],
      description: 'レンダリングするHTML要素',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Cover>;

export const Default: Story = {
  render: (args) => (
    <Cover {...args}>
      <header>
        <Box padding="sm" style={{ backgroundColor: '#f3f4f6' }}>
          Header
        </Box>
      </header>
      <div data-centered>
        <Center max="narrow">
          <h1 style={{ textAlign: 'center', margin: '0 0 1rem 0' }}>Welcome to Our Site</h1>
          <p style={{ textAlign: 'center', color: '#6b7280' }}>
            This content is vertically centered within the Cover.
          </p>
        </Center>
      </div>
      <footer>
        <Box padding="sm" style={{ backgroundColor: '#f3f4f6' }}>
          Footer
        </Box>
      </footer>
    </Cover>
  ),
  args: {
    minHeight: '400px',
    padding: 'md',
  },
};

export const FullViewport: Story = {
  render: (args) => (
    <Cover {...args}>
      <header>
        <Box padding="sm" style={{ backgroundColor: '#1f2937', color: 'white' }}>
          Site Header
        </Box>
      </header>
      <main data-centered>
        <Center max="base">
          <h1 style={{ textAlign: 'center', margin: '0 0 1rem 0', fontSize: '3rem' }}>
            Hero Section
          </h1>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#6b7280' }}>
            A full viewport height section with centered content.
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Get Started
            </button>
          </div>
        </Center>
      </main>
      <footer>
        <Box padding="md" style={{ backgroundColor: '#1f2937', color: 'white', textAlign: 'center' }}>
          © 2024 Company Name
        </Box>
      </footer>
    </Cover>
  ),
  args: {
    minHeight: '100vh',
    padding: 'lg',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'minHeight="100vh"を使用した全画面高さのヒーローセクション。ヘッダーとフッターは上下に配置され、メインコンテンツは中央に配置されます。',
      },
    },
  },
};

export const CustomHeight: Story = {
  render: (args) => (
    <Cover {...args}>
      <div data-centered>
        <h2 style={{ textAlign: 'center', margin: 0 }}>Custom Height Cover</h2>
        <p style={{ textAlign: 'center', color: '#6b7280' }}>This cover has a height of 300px.</p>
      </div>
    </Cover>
  ),
  args: {
    minHeight: '300px',
    padding: 'md',
  },
};

export const NoPadding: Story = {
  render: (args) => (
    <Cover {...args}>
      <div
        data-centered
        style={{
          backgroundColor: '#4f46e5',
          color: 'white',
          padding: '2rem',
          width: '100%',
        }}
      >
        <h2 style={{ textAlign: 'center', margin: '0 0 1rem 0' }}>Edge to Edge Content</h2>
        <p style={{ textAlign: 'center' }}>No padding on the Cover container.</p>
      </div>
    </Cover>
  ),
  args: {
    minHeight: '350px',
    noPad: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'noPad propを使用すると、Coverのパディングが削除されます。',
      },
    },
  },
};

export const OnlyCenteredContent: Story = {
  render: (args) => (
    <Cover {...args}>
      <div data-centered>
        <Box padding="xl" style={{ backgroundColor: '#fef3c7', borderRadius: '8px' }}>
          <h2 style={{ margin: '0 0 1rem 0' }}>Centered Box</h2>
          <p style={{ margin: 0 }}>This box is vertically centered in the cover.</p>
        </Box>
      </div>
    </Cover>
  ),
  args: {
    minHeight: '400px',
    padding: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'ヘッダーやフッターなしで、中央のコンテンツのみを配置する例。',
      },
    },
  },
};

export const LoginPage: Story = {
  render: (args) => (
    <Cover {...args}>
      <header style={{ textAlign: 'center', padding: '1rem' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🚀 MyApp</span>
      </header>
      <main data-centered>
        <Box padding="xl" borderWidth="1px" style={{ maxWidth: '400px', borderRadius: '8px' }}>
          <h2 style={{ margin: '0 0 1.5rem 0', textAlign: 'center' }}>Sign In</h2>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.25rem' }}>Email</label>
            <input type="email" style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.25rem' }}>Password</label>
            <input type="password" style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <button
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Sign In
          </button>
        </Box>
      </main>
      <footer style={{ textAlign: 'center', padding: '1rem', color: '#6b7280' }}>
        <a href="#">Forgot password?</a> · <a href="#">Create account</a>
      </footer>
    </Cover>
  ),
  args: {
    minHeight: '100vh',
    padding: 'md',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'ログインページのレイアウト例。フォームは垂直方向に中央配置されます。',
      },
    },
  },
};
