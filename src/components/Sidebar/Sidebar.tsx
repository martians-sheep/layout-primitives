import type { ElementType, CSSProperties, Ref } from 'react';
import * as React from 'react';
import type { PolymorphicComponentProp } from '../../types/polymorphic';
import type { SpaceValue } from '../../types/tokens';
import { resolveSpaceValue } from '../../utils/resolveValue';
import './Sidebar.css';

export interface SidebarOwnProps {
  /**
   * Which side the sidebar is on
   * @default "left"
   */
  side?: 'left' | 'right';
  /**
   * The width of the sidebar (intrinsic or explicit)
   * @default "20rem"
   */
  sideWidth?: string;
  /**
   * Minimum width of the content area as a percentage
   * When content can't maintain this width, elements stack vertically
   * @default "50%"
   */
  contentMin?: string;
  /**
   * Gap between sidebar and content
   * Accepts tokens ("md", "lg") or CSS values ("1rem")
   * @default "md"
   */
  gap?: SpaceValue;
  /**
   * Prevent items from stretching to fill the container height
   * @default false
   */
  noStretch?: boolean;
  /**
   * Ref to the underlying element
   */
  ref?: Ref<HTMLElement>;
}

export type SidebarProps<C extends ElementType = 'div'> =
  PolymorphicComponentProp<C, SidebarOwnProps>;

export function Sidebar<C extends ElementType = 'div'>({
  as,
  side = 'left',
  sideWidth = '20rem',
  contentMin = '50%',
  gap = 'md',
  noStretch = false,
  className,
  style,
  children,
  ref,
  ...props
}: SidebarProps<C>) {
  const Component = as || 'div';

  const resolvedGap = resolveSpaceValue(gap);

  const combinedClassName = ['sidebar', className].filter(Boolean).join(' ');

  const combinedStyle: CSSProperties = {
    '--sidebar-width': sideWidth,
    '--sidebar-content-min': contentMin,
    '--sidebar-gap': resolvedGap,
    ...style,
  } as CSSProperties;

  return (
    <Component
      ref={ref as React.Ref<never>}
      className={combinedClassName}
      data-side={side === 'right' ? 'right' : undefined}
      data-no-stretch={noStretch || undefined}
      style={combinedStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
