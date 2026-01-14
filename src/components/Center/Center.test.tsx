import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Center } from './Center';

describe('Center', () => {
  it('renders children correctly', () => {
    render(<Center>Content</Center>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies the center class', () => {
    const { container } = render(<Center>Content</Center>);
    expect(container.firstChild).toHaveClass('center');
  });

  it('sets max width with token', () => {
    const { container } = render(<Center max="narrow">Content</Center>);
    expect(container.firstChild).toHaveStyle('--center-max: var(--m-narrow)');
  });

  it('sets max width with raw value', () => {
    const { container } = render(<Center max="800px">Content</Center>);
    expect(container.firstChild).toHaveStyle('--center-max: 800px');
  });

  it('sets gutters with token', () => {
    const { container } = render(<Center gutters="md">Content</Center>);
    expect(container.firstChild).toHaveStyle('--center-gutters: var(--s-md)');
  });

  it('sets gutters with raw value', () => {
    const { container } = render(<Center gutters="1rem">Content</Center>);
    expect(container.firstChild).toHaveStyle('--center-gutters: 1rem');
  });

  it('sets data-intrinsic attribute when intrinsic is true', () => {
    const { container } = render(<Center intrinsic>Content</Center>);
    expect(container.firstChild).toHaveAttribute('data-intrinsic');
  });

  it('does not set data-intrinsic when intrinsic is false', () => {
    const { container } = render(<Center intrinsic={false}>Content</Center>);
    expect(container.firstChild).not.toHaveAttribute('data-intrinsic');
  });

  it('sets data-and-text attribute when andText is true', () => {
    const { container } = render(<Center andText>Content</Center>);
    expect(container.firstChild).toHaveAttribute('data-and-text');
  });

  it('does not set data-and-text when andText is false', () => {
    const { container } = render(<Center andText={false}>Content</Center>);
    expect(container.firstChild).not.toHaveAttribute('data-and-text');
  });

  it('renders as custom element with "as" prop', () => {
    render(
      <Center as="main" data-testid="center">
        Content
      </Center>,
    );
    expect(screen.getByTestId('center').tagName).toBe('MAIN');
  });

  it('merges custom className', () => {
    const { container } = render(<Center className="custom">Content</Center>);
    expect(container.firstChild).toHaveClass('center', 'custom');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Center ref={ref}>Content</Center>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('uses default max when not provided', () => {
    const { container } = render(<Center>Content</Center>);
    expect(container.firstChild).toHaveStyle('--center-max: var(--m-base)');
  });
});
