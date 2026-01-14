import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid } from './Grid';
import { Box } from '../Box/Box';

const meta: Meta<typeof Grid> = {
  title: 'Layout Primitives/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Gridはauto-fillを使用したレスポンシブなグリッドレイアウトを提供するコンポーネントです。メディアクエリなしで、コンテナの幅に応じて自動的にカラム数が調整されます。',
      },
    },
  },
  argTypes: {
    minItemWidth: {
      control: 'text',
      description: '各アイテムの最小幅',
    },
    gap: {
      control: 'select',
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'グリッドアイテム間のギャップ',
    },
    as: {
      control: 'select',
      options: ['div', 'section', 'ul', 'ol'],
      description: 'レンダリングするHTML要素',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const GridItem = ({ children }: { children: React.ReactNode }) => (
  <Box padding="md" style={{ backgroundColor: '#fef3c7', border: '1px solid #f59e0b' }}>
    {children}
  </Box>
);

export const Default: Story = {
  render: (args) => (
    <Grid {...args}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
      <GridItem>Item 5</GridItem>
      <GridItem>Item 6</GridItem>
    </Grid>
  ),
  args: {
    minItemWidth: '200px',
    gap: 'md',
  },
};

export const SmallItems: Story = {
  render: (args) => (
    <Grid {...args}>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>6</GridItem>
      <GridItem>7</GridItem>
      <GridItem>8</GridItem>
    </Grid>
  ),
  args: {
    minItemWidth: '100px',
    gap: 'sm',
  },
};

export const LargeItems: Story = {
  render: (args) => (
    <Grid {...args}>
      <GridItem>Large Item 1</GridItem>
      <GridItem>Large Item 2</GridItem>
      <GridItem>Large Item 3</GridItem>
    </Grid>
  ),
  args: {
    minItemWidth: '300px',
    gap: 'lg',
  },
};

export const SmallGap: Story = {
  render: (args) => (
    <Grid {...args}>
      <GridItem>A</GridItem>
      <GridItem>B</GridItem>
      <GridItem>C</GridItem>
      <GridItem>D</GridItem>
    </Grid>
  ),
  args: {
    minItemWidth: '150px',
    gap: 'xs',
  },
};

export const LargeGap: Story = {
  render: (args) => (
    <Grid {...args}>
      <GridItem>Spacious 1</GridItem>
      <GridItem>Spacious 2</GridItem>
      <GridItem>Spacious 3</GridItem>
      <GridItem>Spacious 4</GridItem>
    </Grid>
  ),
  args: {
    minItemWidth: '200px',
    gap: 'xl',
  },
};

export const CardGrid: Story = {
  render: (args) => (
    <Grid {...args}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <Box
          key={n}
          padding="md"
          borderWidth="1px"
          style={{ borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
        >
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Card {n}</h3>
          <p style={{ margin: 0, color: '#6b7280' }}>
            This is a sample card layout using the Grid component.
          </p>
        </Box>
      ))}
    </Grid>
  ),
  args: {
    minItemWidth: '250px',
    gap: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story:
          'カードレイアウトの例。ウィンドウ幅を変更すると、カラム数が自動的に調整されます。',
      },
    },
  },
};

export const ImageGallery: Story = {
  render: (args) => (
    <Grid {...args}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <div
          key={n}
          style={{
            backgroundColor: `hsl(${n * 40}, 70%, 80%)`,
            aspectRatio: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
          }}
        >
          {n}
        </div>
      ))}
    </Grid>
  ),
  args: {
    minItemWidth: '150px',
    gap: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: '画像ギャラリーのような正方形アイテムのグリッドレイアウト。',
      },
    },
  },
};
