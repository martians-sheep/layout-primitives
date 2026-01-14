import type { ElementType, CSSProperties, Ref } from 'react';
import * as React from 'react';
import type { PolymorphicComponentProp } from '../../types/polymorphic';
import type { SpaceValue } from '../../types/tokens';
import { resolveSpaceValue } from '../../utils/resolveValue';
import './Stack.css';

export interface StackOwnProps {
  /**
   * Space between elements
   * Accepts tokens ("md", "lg") or CSS values ("1.5rem", "var(--custom)")
   * @default "md"
   */
  space?: SpaceValue;
  /**
   * Apply spacing recursively to all descendants, not just direct children
   * @default false
   */
  recursive?: boolean;
  /**
   * Push elements after this index to the bottom (using margin-block-end: auto)
   * Useful for sticky footers or pushing content apart
   */
  splitAfter?: 1 | 2 | 3 | 4 | 5;
  /**
   * Ref to the underlying element
   */
  ref?: Ref<HTMLElement>;
}

export type StackProps<C extends ElementType = 'div'> = PolymorphicComponentProp<
  C,
  StackOwnProps
>;

export function Stack<C extends ElementType = 'div'>({
  as,
  space = 'md',
  recursive = false,
  splitAfter,
  className,
  style,
  children,
  ref,
  ...props
}: StackProps<C>) {
  const Component = as || 'div';

  const resolvedSpace = resolveSpaceValue(space);

  const combinedClassName = ['stack', className].filter(Boolean).join(' ');

  const combinedStyle: CSSProperties = {
    '--stack-space': resolvedSpace,
    ...style,
  } as CSSProperties;

  return (
    <Component
      ref={ref as React.Ref<never>}
      className={combinedClassName}
      data-recursive={recursive || undefined}
      data-split-after={splitAfter || undefined}
      style={combinedStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
