import type { ElementType, CSSProperties, Ref } from 'react';
import * as React from 'react';
import type { PolymorphicComponentProp } from '../../types/polymorphic';
import type { RatioValue } from '../../types/tokens';
import { resolveRatioValue } from '../../utils/resolveValue';
import './Frame.css';

export interface FrameOwnProps {
  /**
   * Aspect ratio of the frame
   * Accepts tokens ("square", "widescreen") or CSS values ("16/9", "1.5")
   * @default "widescreen"
   */
  ratio?: RatioValue;
  /**
   * Ref to the underlying element
   */
  ref?: Ref<HTMLElement>;
}

export type FrameProps<C extends ElementType = 'div'> =
  PolymorphicComponentProp<C, FrameOwnProps>;

export function Frame<C extends ElementType = 'div'>({
  as,
  ratio = 'widescreen',
  className,
  style,
  children,
  ref,
  ...props
}: FrameProps<C>) {
  const Component = as || 'div';

  const resolvedRatio = resolveRatioValue(ratio);

  const combinedClassName = ['frame', className].filter(Boolean).join(' ');

  const combinedStyle: CSSProperties = {
    '--frame-ratio': resolvedRatio,
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
