import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from 'react';

/**
 * Props for the polymorphic "as" prop
 */
export type AsProp<C extends ElementType> = {
  as?: C;
};

/**
 * Helper type to omit props that are provided by the component
 */
type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

/**
 * Polymorphic component props without ref
 * Combines custom props with the HTML element props, omitting conflicts
 */
export type PolymorphicComponentProp<
  C extends ElementType,
  Props = object,
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

/**
 * Type for the ref of a polymorphic component
 */
export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>['ref'];

/**
 * Polymorphic component props with ref support
 */
export type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = object,
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };
