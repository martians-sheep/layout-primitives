import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Box } from './Box';

describe('Box', () => {
  it('renders children correctly', () => {
    render(<Box>Content</Box>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies the box class', () => {
    const { container } = render(<Box>Content</Box>);
    expect(container.firstChild).toHaveClass('box');
  });

  it('sets custom padding via CSS variable with token', () => {
    const { container } = render(<Box padding="lg">Content</Box>);
    expect(container.firstChild).toHaveStyle('--box-padding: var(--s-lg)');
  });

  it('accepts raw CSS values for padding', () => {
    const { container } = render(<Box padding="2rem">Content</Box>);
    expect(container.firstChild).toHaveStyle('--box-padding: 2rem');
  });

  it('sets border width with token', () => {
    const { container } = render(<Box borderWidth="thin">Content</Box>);
    expect(container.firstChild).toHaveStyle(
      '--box-border-width: var(--border-thin)',
    );
  });

  it('sets border width with raw value', () => {
    const { container } = render(<Box borderWidth="3px">Content</Box>);
    expect(container.firstChild).toHaveStyle('--box-border-width: 3px');
  });

  it('sets border color', () => {
    const { container } = render(<Box borderColor="red">Content</Box>);
    expect(container.firstChild).toHaveStyle('--box-border-color: red');
  });

  it('sets data-invert attribute when invert is true', () => {
    const { container } = render(<Box invert>Content</Box>);
    expect(container.firstChild).toHaveAttribute('data-invert');
  });

  it('does not set data-invert when invert is false', () => {
    const { container } = render(<Box invert={false}>Content</Box>);
    expect(container.firstChild).not.toHaveAttribute('data-invert');
  });

  it('renders as custom element with "as" prop', () => {
    render(
      <Box as="article" data-testid="box">
        Content
      </Box>,
    );
    expect(screen.getByTestId('box').tagName).toBe('ARTICLE');
  });

  it('merges custom className', () => {
    const { container } = render(<Box className="custom">Content</Box>);
    expect(container.firstChild).toHaveClass('box', 'custom');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Box ref={ref}>Content</Box>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('uses default padding when not provided', () => {
    const { container } = render(<Box>Content</Box>);
    expect(container.firstChild).toHaveStyle('--box-padding: var(--s-md)');
  });
});
