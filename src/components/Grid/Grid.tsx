import type { ElementType, CSSProperties, Ref } from 'react';
import * as React from 'react';
import type { PolymorphicComponentProp } from '../../types/polymorphic';
import type { SpaceValue } from '../../types/tokens';
import { resolveSpaceValue } from '../../utils/resolveValue';
import './Grid.css';

export interface GridOwnProps {
  /**
   * Minimum width of each grid item before wrapping
   * Uses CSS min() to handle small containers gracefully
   * @default "250px"
   */
  min?: string;
  /**
   * Gap between grid items
   * Accepts tokens ("md", "lg") or CSS values ("1rem")
   * @default "md"
   */
  gap?: SpaceValue;
  /**
   * Ref to the underlying element
   */
  ref?: Ref<HTMLElement>;
}

export type GridProps<C extends ElementType = 'div'> = PolymorphicComponentProp<
  C,
  GridOwnProps
>;

export function Grid<C extends ElementType = 'div'>({
  as,
  min = '250px',
  gap = 'md',
  className,
  style,
  children,
  ref,
  ...props
}: GridProps<C>) {
  const Component = as || 'div';

  const resolvedGap = resolveSpaceValue(gap);

  const combinedClassName = ['grid', className].filter(Boolean).join(' ');

  const combinedStyle: CSSProperties = {
    '--grid-min': min,
    '--grid-gap': resolvedGap,
    ...style,
  } as CSSProperties;

  return (
    <Component
      ref={ref as React.Ref<never>}
      className={combinedClassName}
      style={combinedStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
