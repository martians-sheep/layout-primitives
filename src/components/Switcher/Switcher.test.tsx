import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Switcher } from './Switcher';

describe('Switcher', () => {
  it('renders children correctly', () => {
    render(
      <Switcher>
        <div>Item 1</div>
        <div>Item 2</div>
      </Switcher>,
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies the switcher class', () => {
    const { container } = render(
      <Switcher>
        <div>Item</div>
      </Switcher>,
    );
    expect(container.firstChild).toHaveClass('switcher');
  });

  it('sets threshold', () => {
    const { container } = render(
      <Switcher threshold="40rem">
        <div>Item</div>
      </Switcher>,
    );
    expect(container.firstChild).toHaveStyle('--switcher-threshold: 40rem');
  });

  it('sets gap with token', () => {
    const { container } = render(
      <Switcher gap="lg">
        <div>Item</div>
      </Switcher>,
    );
    expect(container.firstChild).toHaveStyle('--switcher-gap: var(--s-lg)');
  });

  it('sets gap with raw value', () => {
    const { container } = render(
      <Switcher gap="2rem">
        <div>Item</div>
      </Switcher>,
    );
    expect(container.firstChild).toHaveStyle('--switcher-gap: 2rem');
  });

  it('sets data-limit attribute', () => {
    const { container } = render(
      <Switcher limit={3}>
        <div>Item</div>
      </Switcher>,
    );
    expect(container.firstChild).toHaveAttribute('data-limit', '3');
  });

  it('does not set data-limit when not provided', () => {
    const { container } = render(
      <Switcher>
        <div>Item</div>
      </Switcher>,
    );
    expect(container.firstChild).not.toHaveAttribute('data-limit');
  });

  it('renders as custom element with "as" prop', () => {
    render(
      <Switcher as="section" data-testid="switcher">
        <div>Item</div>
      </Switcher>,
    );
    expect(screen.getByTestId('switcher').tagName).toBe('SECTION');
  });

  it('merges custom className', () => {
    const { container } = render(
      <Switcher className="custom">
        <div>Item</div>
      </Switcher>,
    );
    expect(container.firstChild).toHaveClass('switcher', 'custom');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(
      <Switcher ref={ref}>
        <div>Item</div>
      </Switcher>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('uses default values when not provided', () => {
    const { container } = render(
      <Switcher>
        <div>Item</div>
      </Switcher>,
    );
    expect(container.firstChild).toHaveStyle('--switcher-threshold: 30rem');
    expect(container.firstChild).toHaveStyle('--switcher-gap: var(--s-md)');
  });
});
