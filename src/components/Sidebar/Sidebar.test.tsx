import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('renders children correctly', () => {
    render(
      <Sidebar>
        <div>Sidebar</div>
        <div>Content</div>
      </Sidebar>,
    );
    expect(screen.getByText('Sidebar')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies the sidebar class', () => {
    const { container } = render(
      <Sidebar>
        <div>Sidebar</div>
        <div>Content</div>
      </Sidebar>,
    );
    expect(container.firstChild).toHaveClass('sidebar');
  });

  it('sets sidebar width', () => {
    const { container } = render(
      <Sidebar sideWidth="15rem">
        <div>Sidebar</div>
        <div>Content</div>
      </Sidebar>,
    );
    expect(container.firstChild).toHaveStyle('--sidebar-width: 15rem');
  });

  it('sets content minimum width', () => {
    const { container } = render(
      <Sidebar contentMin="60%">
        <div>Sidebar</div>
        <div>Content</div>
      </Sidebar>,
    );
    expect(container.firstChild).toHaveStyle('--sidebar-content-min: 60%');
  });

  it('sets gap with token', () => {
    const { container } = render(
      <Sidebar gap="lg">
        <div>Sidebar</div>
        <div>Content</div>
      </Sidebar>,
    );
    expect(container.firstChild).toHaveStyle('--sidebar-gap: var(--s-lg)');
  });

  it('sets data-side attribute for right sidebar', () => {
    const { container } = render(
      <Sidebar side="right">
        <div>Content</div>
        <div>Sidebar</div>
      </Sidebar>,
    );
    expect(container.firstChild).toHaveAttribute('data-side', 'right');
  });

  it('does not set data-side for left sidebar', () => {
    const { container } = render(
      <Sidebar side="left">
        <div>Sidebar</div>
        <div>Content</div>
      </Sidebar>,
    );
    expect(container.firstChild).not.toHaveAttribute('data-side');
  });

  it('sets data-no-stretch attribute when noStretch is true', () => {
    const { container } = render(
      <Sidebar noStretch>
        <div>Sidebar</div>
        <div>Content</div>
      </Sidebar>,
    );
    expect(container.firstChild).toHaveAttribute('data-no-stretch');
  });

  it('renders as custom element with "as" prop', () => {
    render(
      <Sidebar as="aside" data-testid="sidebar">
        <div>Sidebar</div>
        <div>Content</div>
      </Sidebar>,
    );
    expect(screen.getByTestId('sidebar').tagName).toBe('ASIDE');
  });

  it('merges custom className', () => {
    const { container } = render(
      <Sidebar className="custom">
        <div>Sidebar</div>
        <div>Content</div>
      </Sidebar>,
    );
    expect(container.firstChild).toHaveClass('sidebar', 'custom');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(
      <Sidebar ref={ref}>
        <div>Sidebar</div>
        <div>Content</div>
      </Sidebar>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
