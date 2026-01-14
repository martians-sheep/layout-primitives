import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Cover } from './Cover';

describe('Cover', () => {
  it('renders children correctly', () => {
    render(
      <Cover>
        <header>Header</header>
        <main data-centered>Content</main>
        <footer>Footer</footer>
      </Cover>,
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('applies the cover class', () => {
    const { container } = render(<Cover>Content</Cover>);
    expect(container.firstChild).toHaveClass('cover');
  });

  it('sets min height', () => {
    const { container } = render(<Cover minHeight="50vh">Content</Cover>);
    expect(container.firstChild).toHaveStyle('--cover-min-height: 50vh');
  });

  it('sets padding with token', () => {
    const { container } = render(<Cover padding="lg">Content</Cover>);
    expect(container.firstChild).toHaveStyle('--cover-padding: var(--s-lg)');
  });

  it('sets padding with raw value', () => {
    const { container } = render(<Cover padding="2rem">Content</Cover>);
    expect(container.firstChild).toHaveStyle('--cover-padding: 2rem');
  });

  it('sets data-no-pad attribute when noPad is true', () => {
    const { container } = render(<Cover noPad>Content</Cover>);
    expect(container.firstChild).toHaveAttribute('data-no-pad');
  });

  it('does not set data-no-pad when noPad is false', () => {
    const { container } = render(<Cover noPad={false}>Content</Cover>);
    expect(container.firstChild).not.toHaveAttribute('data-no-pad');
  });

  it('renders as custom element with "as" prop', () => {
    render(
      <Cover as="section" data-testid="cover">
        Content
      </Cover>,
    );
    expect(screen.getByTestId('cover').tagName).toBe('SECTION');
  });

  it('merges custom className', () => {
    const { container } = render(<Cover className="custom">Content</Cover>);
    expect(container.firstChild).toHaveClass('cover', 'custom');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Cover ref={ref}>Content</Cover>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('uses default values when not provided', () => {
    const { container } = render(<Cover>Content</Cover>);
    expect(container.firstChild).toHaveStyle('--cover-min-height: 100vh');
    expect(container.firstChild).toHaveStyle('--cover-padding: var(--s-md)');
  });

  it('preserves data-centered attribute on children', () => {
    render(
      <Cover>
        <main data-centered data-testid="centered">
          Centered
        </main>
      </Cover>,
    );
    expect(screen.getByTestId('centered')).toHaveAttribute('data-centered');
  });
});
