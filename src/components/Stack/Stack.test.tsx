import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Stack } from './Stack';

describe('Stack', () => {
  it('renders children correctly', () => {
    render(
      <Stack>
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>,
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies the stack class', () => {
    const { container } = render(<Stack>Content</Stack>);
    expect(container.firstChild).toHaveClass('stack');
  });

  it('sets custom space via CSS variable with token', () => {
    const { container } = render(<Stack space="lg">Content</Stack>);
    expect(container.firstChild).toHaveStyle('--stack-space: var(--s-lg)');
  });

  it('accepts raw CSS values for space', () => {
    const { container } = render(<Stack space="2rem">Content</Stack>);
    expect(container.firstChild).toHaveStyle('--stack-space: 2rem');
  });

  it('renders as custom element with "as" prop', () => {
    render(
      <Stack as="section" data-testid="stack">
        Content
      </Stack>,
    );
    expect(screen.getByTestId('stack').tagName).toBe('SECTION');
  });

  it('renders as ul with li children', () => {
    render(
      <Stack as="ul" data-testid="stack">
        <li>Item 1</li>
        <li>Item 2</li>
      </Stack>,
    );
    expect(screen.getByTestId('stack').tagName).toBe('UL');
  });

  it('sets data-recursive attribute when recursive is true', () => {
    const { container } = render(<Stack recursive>Content</Stack>);
    expect(container.firstChild).toHaveAttribute('data-recursive');
  });

  it('does not set data-recursive when recursive is false', () => {
    const { container } = render(<Stack recursive={false}>Content</Stack>);
    expect(container.firstChild).not.toHaveAttribute('data-recursive');
  });

  it('sets data-split-after attribute', () => {
    const { container } = render(<Stack splitAfter={2}>Content</Stack>);
    expect(container.firstChild).toHaveAttribute('data-split-after', '2');
  });

  it('does not set data-split-after when not provided', () => {
    const { container } = render(<Stack>Content</Stack>);
    expect(container.firstChild).not.toHaveAttribute('data-split-after');
  });

  it('merges custom className', () => {
    const { container } = render(<Stack className="custom">Content</Stack>);
    expect(container.firstChild).toHaveClass('stack', 'custom');
  });

  it('merges custom style', () => {
    const { container } = render(
      <Stack style={{ padding: '10px' }}>Content</Stack>,
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.padding).toBe('10px');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Stack ref={ref}>Content</Stack>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('uses default space when not provided', () => {
    const { container } = render(<Stack>Content</Stack>);
    expect(container.firstChild).toHaveStyle('--stack-space: var(--s-md)');
  });
});
