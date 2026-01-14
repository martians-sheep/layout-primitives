import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Grid } from './Grid';

describe('Grid', () => {
  it('renders children correctly', () => {
    render(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>,
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies the grid class', () => {
    const { container } = render(<Grid>Content</Grid>);
    expect(container.firstChild).toHaveClass('grid');
  });

  it('sets min width', () => {
    const { container } = render(<Grid min="300px">Content</Grid>);
    expect(container.firstChild).toHaveStyle('--grid-min: 300px');
  });

  it('sets gap with token', () => {
    const { container } = render(<Grid gap="lg">Content</Grid>);
    expect(container.firstChild).toHaveStyle('--grid-gap: var(--s-lg)');
  });

  it('sets gap with raw value', () => {
    const { container } = render(<Grid gap="2rem">Content</Grid>);
    expect(container.firstChild).toHaveStyle('--grid-gap: 2rem');
  });

  it('renders as custom element with "as" prop', () => {
    render(
      <Grid as="ul" data-testid="grid">
        <li>Item</li>
      </Grid>,
    );
    expect(screen.getByTestId('grid').tagName).toBe('UL');
  });

  it('merges custom className', () => {
    const { container } = render(<Grid className="custom">Content</Grid>);
    expect(container.firstChild).toHaveClass('grid', 'custom');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Grid ref={ref}>Content</Grid>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('uses default values when not provided', () => {
    const { container } = render(<Grid>Content</Grid>);
    expect(container.firstChild).toHaveStyle('--grid-min: 250px');
    expect(container.firstChild).toHaveStyle('--grid-gap: var(--s-md)');
  });
});
