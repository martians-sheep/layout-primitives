import type { ElementType, CSSProperties, Ref } from 'react';
import * as React from 'react';
import type { PolymorphicComponentProp } from '../../types/polymorphic';
import type { SpaceValue } from '../../types/tokens';
import { resolveSpaceValue } from '../../utils/resolveValue';
import './Cover.css';

export interface CoverOwnProps {
  /**
   * Minimum height of the cover
   * @default "100vh"
   */
  minHeight?: string;
  /**
   * Padding around the cover content
   * Accepts tokens ("md", "lg") or CSS values ("1rem")
   * @default "md"
   */
  padding?: SpaceValue;
  /**
   * Remove padding from the cover
   * @default false
   */
  noPad?: boolean;
  /**
   * Ref to the underlying element
   */
  ref?: Ref<HTMLElement>;
}

export type CoverProps<C extends ElementType = 'div'> =
  PolymorphicComponentProp<C, CoverOwnProps>;

/**
 * Cover component for full-height layouts with vertically centered content.
 *
 * To center a child element, add `data-centered` attribute to it:
 * ```tsx
 * <Cover>
 *   <header>Header</header>
 *   <main data-centered>Centered content</main>
 *   <footer>Footer</footer>
 * </Cover>
 * ```
 */
export function Cover<C extends ElementType = 'div'>({
  as,
  minHeight = '100vh',
  padding = 'md',
  noPad = false,
  className,
  style,
  children,
  ref,
  ...props
}: CoverProps<C>) {
  const Component = as || 'div';

  const resolvedPadding = resolveSpaceValue(padding);

  const combinedClassName = ['cover', className].filter(Boolean).join(' ');

  const combinedStyle: CSSProperties = {
    '--cover-min-height': minHeight,
    '--cover-padding': resolvedPadding,
    ...style,
  } as CSSProperties;

  return (
    <Component
      ref={ref as React.Ref<never>}
      className={combinedClassName}
      data-no-pad={noPad || undefined}
      style={combinedStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
