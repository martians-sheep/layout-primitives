import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Frame } from './Frame';

describe('Frame', () => {
  it('renders children correctly', () => {
    render(
      <Frame>
        <img src="test.jpg" alt="Test" />
      </Frame>,
    );
    expect(screen.getByAltText('Test')).toBeInTheDocument();
  });

  it('applies the frame class', () => {
    const { container } = render(<Frame>Content</Frame>);
    expect(container.firstChild).toHaveClass('frame');
  });

  it('sets ratio with token', () => {
    const { container } = render(<Frame ratio="square">Content</Frame>);
    expect(container.firstChild).toHaveStyle(
      '--frame-ratio: var(--ratio-square)',
    );
  });

  it('sets ratio with raw value', () => {
    const { container } = render(<Frame ratio="4/3">Content</Frame>);
    expect(container.firstChild).toHaveStyle('--frame-ratio: 4/3');
  });

  it('renders as custom element with "as" prop', () => {
    render(
      <Frame as="figure" data-testid="frame">
        <img src="test.jpg" alt="Test" />
      </Frame>,
    );
    expect(screen.getByTestId('frame').tagName).toBe('FIGURE');
  });

  it('merges custom className', () => {
    const { container } = render(<Frame className="custom">Content</Frame>);
    expect(container.firstChild).toHaveClass('frame', 'custom');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Frame ref={ref}>Content</Frame>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('uses default ratio when not provided', () => {
    const { container } = render(<Frame>Content</Frame>);
    expect(container.firstChild).toHaveStyle(
      '--frame-ratio: var(--ratio-widescreen)',
    );
  });
});
