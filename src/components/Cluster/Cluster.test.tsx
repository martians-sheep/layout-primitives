import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Cluster } from './Cluster';

describe('Cluster', () => {
  it('renders children correctly', () => {
    render(
      <Cluster>
        <span>Item 1</span>
        <span>Item 2</span>
      </Cluster>,
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies the cluster class', () => {
    const { container } = render(<Cluster>Content</Cluster>);
    expect(container.firstChild).toHaveClass('cluster');
  });

  it('sets gap with token', () => {
    const { container } = render(<Cluster gap="lg">Content</Cluster>);
    expect(container.firstChild).toHaveStyle('--cluster-gap: var(--s-lg)');
  });

  it('sets gap with raw value', () => {
    const { container } = render(<Cluster gap="2rem">Content</Cluster>);
    expect(container.firstChild).toHaveStyle('--cluster-gap: 2rem');
  });

  it('sets justify', () => {
    const { container } = render(
      <Cluster justify="space-between">Content</Cluster>,
    );
    expect(container.firstChild).toHaveStyle('--cluster-justify: space-between');
  });

  it('sets align', () => {
    const { container } = render(<Cluster align="flex-start">Content</Cluster>);
    expect(container.firstChild).toHaveStyle('--cluster-align: flex-start');
  });

  it('renders as custom element with "as" prop', () => {
    render(
      <Cluster as="nav" data-testid="cluster">
        Content
      </Cluster>,
    );
    expect(screen.getByTestId('cluster').tagName).toBe('NAV');
  });

  it('merges custom className', () => {
    const { container } = render(<Cluster className="custom">Content</Cluster>);
    expect(container.firstChild).toHaveClass('cluster', 'custom');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Cluster ref={ref}>Content</Cluster>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('uses default values when not provided', () => {
    const { container } = render(<Cluster>Content</Cluster>);
    expect(container.firstChild).toHaveStyle('--cluster-gap: var(--s-md)');
    expect(container.firstChild).toHaveStyle('--cluster-justify: flex-start');
    expect(container.firstChild).toHaveStyle('--cluster-align: center');
  });
});
