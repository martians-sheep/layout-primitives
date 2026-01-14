import type { ElementType, CSSProperties, Ref } from 'react';
import * as React from 'react';
import type { PolymorphicComponentProp } from '../../types/polymorphic';
import type { SpaceValue, BorderValue } from '../../types/tokens';
import { resolveSpaceValue, resolveBorderValue } from '../../utils/resolveValue';
import './Box.css';

export interface BoxOwnProps {
  /**
   * Padding inside the box
   * Accepts tokens ("md", "lg") or CSS values ("1.5rem", "var(--custom)")
   * @default "md"
   */
  padding?: SpaceValue;
  /**
   * Border width
   * Accepts tokens ("thin", "regular") or CSS values ("2px")
   * @default undefined (no border)
   */
  borderWidth?: BorderValue;
  /**
   * Border color
   * @default "currentColor"
   */
  borderColor?: string;
  /**
   * Invert colors (dark background, light text)
   * @default false
   */
  invert?: boolean;
  /**
   * Ref to the underlying element
   */
  ref?: Ref<HTMLElement>;
}

export type BoxProps<C extends ElementType = 'div'> = PolymorphicComponentProp<
  C,
  BoxOwnProps
>;

export function Box<C extends ElementType = 'div'>({
  as,
  padding = 'md',
  borderWidth,
  borderColor,
  invert = false,
  className,
  style,
  children,
  ref,
  ...props
}: BoxProps<C>) {
  const Component = as || 'div';

  const resolvedPadding = resolveSpaceValue(padding);
  const resolvedBorderWidth = borderWidth
    ? resolveBorderValue(borderWidth)
    : undefined;

  const combinedClassName = ['box', className].filter(Boolean).join(' ');

  const combinedStyle: CSSProperties = {
    '--box-padding': resolvedPadding,
    ...(resolvedBorderWidth && { '--box-border-width': resolvedBorderWidth }),
    ...(borderColor && { '--box-border-color': borderColor }),
    ...style,
  } as CSSProperties;

  return (
    <Component
      ref={ref as React.Ref<never>}
      className={combinedClassName}
      data-invert={invert || undefined}
      style={combinedStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
