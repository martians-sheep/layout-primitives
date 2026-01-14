import type { Meta, StoryObj } from '@storybook/react-vite';
import { Frame } from './Frame';

const meta: Meta<typeof Frame> = {
  title: 'Layout Primitives/Frame',
  component: Frame,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Frameはアスペクト比を維持するコンテナを提供するコンポーネントです。画像、動画、iframeなど、一定のアスペクト比を維持したいコンテンツに最適です。',
      },
    },
  },
  argTypes: {
    ratio: {
      control: 'select',
      options: ['square', 'landscape', 'widescreen', 'ultrawide', 'portrait', 'golden'],
      description: 'アスペクト比。トークン値またはCSS値を指定可能',
    },
    as: {
      control: 'select',
      options: ['div', 'figure', 'picture'],
      description: 'レンダリングするHTML要素',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Frame>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '400px' }}>
      <Frame {...args}>
        <img
          src="https://picsum.photos/800/450"
          alt="Sample"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Frame>
    </div>
  ),
  args: {
    ratio: 'widescreen',
  },
};

export const Square: Story = {
  render: (args) => (
    <div style={{ maxWidth: '300px' }}>
      <Frame {...args}>
        <img
          src="https://picsum.photos/400/400"
          alt="Square"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Frame>
    </div>
  ),
  args: {
    ratio: 'square',
  },
};

export const Landscape: Story = {
  render: (args) => (
    <div style={{ maxWidth: '400px' }}>
      <Frame {...args}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#dbeafe',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          4:3 Landscape
        </div>
      </Frame>
    </div>
  ),
  args: {
    ratio: 'landscape',
  },
};

export const Portrait: Story = {
  render: (args) => (
    <div style={{ maxWidth: '250px' }}>
      <Frame {...args}>
        <img
          src="https://picsum.photos/300/400"
          alt="Portrait"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Frame>
    </div>
  ),
  args: {
    ratio: 'portrait',
  },
};

export const Ultrawide: Story = {
  render: (args) => (
    <Frame {...args}>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#1f2937',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
        }}
      >
        21:9 Ultrawide
      </div>
    </Frame>
  ),
  args: {
    ratio: 'ultrawide',
  },
};

export const Golden: Story = {
  render: (args) => (
    <div style={{ maxWidth: '400px' }}>
      <Frame {...args}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#fef3c7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Golden Ratio (1.618:1)
        </div>
      </Frame>
    </div>
  ),
  args: {
    ratio: 'golden',
  },
  parameters: {
    docs: {
      description: {
        story: '黄金比（約1.618:1）のアスペクト比。',
      },
    },
  },
};

export const CustomRatio: Story = {
  render: (args) => (
    <div style={{ maxWidth: '400px' }}>
      <Frame {...args}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#e0e7ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Custom 3:2 Ratio
        </div>
      </Frame>
    </div>
  ),
  args: {
    ratio: '3/2',
  },
  parameters: {
    docs: {
      description: {
        story: 'トークン以外にも、任意のCSS aspect-ratio値を指定できます。',
      },
    },
  },
};

export const VideoEmbed: Story = {
  render: (args) => (
    <div style={{ maxWidth: '640px' }}>
      <Frame {...args}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video"
          style={{ width: '100%', height: '100%', border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Frame>
    </div>
  ),
  args: {
    ratio: 'widescreen',
  },
  parameters: {
    docs: {
      description: {
        story: 'YouTube動画などのiframeを埋め込む例。',
      },
    },
  },
};

export const ImageGallery: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <Frame key={n} {...args}>
          <img
            src={`https://picsum.photos/200/200?random=${n}`}
            alt={`Gallery ${n}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Frame>
      ))}
    </div>
  ),
  args: {
    ratio: 'square',
  },
  parameters: {
    docs: {
      description: {
        story: '正方形の画像ギャラリーの例。',
      },
    },
  },
};

export const PlaceholderBox: Story = {
  render: (args) => (
    <div style={{ maxWidth: '400px' }}>
      <Frame {...args}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f3f4f6',
            border: '2px dashed #d1d5db',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9ca3af',
          }}
        >
          <span>Image Placeholder</span>
        </div>
      </Frame>
    </div>
  ),
  args: {
    ratio: 'widescreen',
  },
  parameters: {
    docs: {
      description: {
        story: '画像のプレースホルダーとして使用する例。',
      },
    },
  },
};
