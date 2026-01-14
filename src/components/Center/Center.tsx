import type { ElementType, CSSProperties, Ref } from 'react';
import * as React from 'react';
import type { PolymorphicComponentProp } from '../../types/polymorphic';
import type { MeasureValue, SpaceValue } from '../../types/tokens';
import {
  resolveMeasureValue,
  resolveSpaceValue,
} from '../../utils/resolveValue';
import './Center.css';

export interface CenterOwnProps {
  /**
   * Maximum width of the centered content
   * Accepts tokens ("narrow", "base", "wide") or CSS values ("800px", "60ch")
   * @default "base"
   */
  max?: MeasureValue;
  /**
   * Padding on the inline axis (left/right in LTR)
   * Acts as minimum space from viewport edges
   * Accepts tokens ("md", "lg") or CSS values ("1rem")
   */
  gutters?: SpaceValue;
  /**
   * Center based on the content's intrinsic width
   * Uses flexbox alignment instead of auto margins
   * @default false
   */
  intrinsic?: boolean;
  /**
   * Also center the text content
   * @default false
   */
  andText?: boolean;
  /**
   * Ref to the underlying element
   */
  ref?: Ref<HTMLElement>;
}

export type CenterProps<C extends ElementType = 'div'> =
  PolymorphicComponentProp<C, CenterOwnProps>;

export function Center<C extends ElementType = 'div'>({
  as,
  max = 'base',
  gutters,
  intrinsic = false,
  andText = false,
  className,
  style,
  children,
  ref,
  ...props
}: CenterProps<C>) {
  const Component = as || 'div';

  const resolvedMax = resolveMeasureValue(max);
  const resolvedGutters = gutters ? resolveSpaceValue(gutters) : undefined;

  const combinedClassName = ['center', className].filter(Boolean).join(' ');

  const combinedStyle: CSSProperties = {
    '--center-max': resolvedMax,
    ...(resolvedGutters && { '--center-gutters': resolvedGutters }),
    ...style,
  } as CSSProperties;

  return (
    <Component
      ref={ref as React.Ref<never>}
      className={combinedClassName}
      data-intrinsic={intrinsic || undefined}
      data-and-text={andText || undefined}
      style={combinedStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
