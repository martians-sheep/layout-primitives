import type { ElementType, CSSProperties, Ref } from 'react';
import * as React from 'react';
import type { PolymorphicComponentProp } from '../../types/polymorphic';
import type { SpaceValue } from '../../types/tokens';
import { resolveSpaceValue } from '../../utils/resolveValue';
import './Switcher.css';

export interface SwitcherOwnProps {
  /**
   * The container width at which to switch from horizontal to vertical layout
   * When container is narrower than this value, children stack vertically
   * @default "30rem"
   */
  threshold?: string;
  /**
   * Gap between items
   * Accepts tokens ("md", "lg") or CSS values ("1rem")
   * @default "md"
   */
  gap?: SpaceValue;
  /**
   * Maximum number of items to show in a row
   * Items beyond this limit will wrap to full width
   */
  limit?: 2 | 3 | 4 | 5;
  /**
   * Ref to the underlying element
   */
  ref?: Ref<HTMLElement>;
}

export type SwitcherProps<C extends ElementType = 'div'> =
  PolymorphicComponentProp<C, SwitcherOwnProps>;

export function Switcher<C extends ElementType = 'div'>({
  as,
  threshold = '30rem',
  gap = 'md',
  limit,
  className,
  style,
  children,
  ref,
  ...props
}: SwitcherProps<C>) {
  const Component = as || 'div';

  const resolvedGap = resolveSpaceValue(gap);

  const combinedClassName = ['switcher', className].filter(Boolean).join(' ');

  const combinedStyle: CSSProperties = {
    '--switcher-threshold': threshold,
    '--switcher-gap': resolvedGap,
    ...style,
  } as CSSProperties;

  return (
    <Component
      ref={ref as React.Ref<never>}
      className={combinedClassName}
      data-limit={limit || undefined}
      style={combinedStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
