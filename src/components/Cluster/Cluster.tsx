import type { ElementType, CSSProperties, Ref } from 'react';
import * as React from 'react';
import type { PolymorphicComponentProp } from '../../types/polymorphic';
import type { SpaceValue } from '../../types/tokens';
import { resolveSpaceValue } from '../../utils/resolveValue';
import './Cluster.css';

type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

export interface ClusterOwnProps {
  /**
   * Gap between items
   * Accepts tokens ("md", "lg") or CSS values ("1rem")
   * @default "md"
   */
  gap?: SpaceValue;
  /**
   * Horizontal alignment of items
   * @default "flex-start"
   */
  justify?: JustifyContent;
  /**
   * Vertical alignment of items
   * @default "center"
   */
  align?: AlignItems;
  /**
   * Ref to the underlying element
   */
  ref?: Ref<HTMLElement>;
}

export type ClusterProps<C extends ElementType = 'div'> =
  PolymorphicComponentProp<C, ClusterOwnProps>;

export function Cluster<C extends ElementType = 'div'>({
  as,
  gap = 'md',
  justify = 'flex-start',
  align = 'center',
  className,
  style,
  children,
  ref,
  ...props
}: ClusterProps<C>) {
  const Component = as || 'div';

  const resolvedGap = resolveSpaceValue(gap);

  const combinedClassName = ['cluster', className].filter(Boolean).join(' ');

  const combinedStyle: CSSProperties = {
    '--cluster-gap': resolvedGap,
    '--cluster-justify': justify,
    '--cluster-align': align,
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
