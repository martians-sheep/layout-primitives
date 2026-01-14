/**
 * Space token names
 * Maps to CSS custom properties: --s-{token}
 */
export type SpaceToken =
  | '3xs'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl';

/**
 * Space value - accepts either a token name or a raw CSS value
 * Examples: "md", "1rem", "var(--custom-space)"
 */
export type SpaceValue = SpaceToken | (string & {});

/**
 * Measure (line length) token names
 * Maps to CSS custom properties: --m-{token}
 */
export type MeasureToken = 'narrow' | 'base' | 'wide';

/**
 * Measure value - accepts either a token name or a raw CSS value
 * Examples: "base", "60ch", "800px"
 */
export type MeasureValue = MeasureToken | (string & {});

/**
 * Aspect ratio token names
 * Maps to CSS custom properties: --ratio-{token}
 */
export type RatioToken =
  | 'square'
  | 'landscape'
  | 'portrait'
  | 'widescreen'
  | 'ultrawide'
  | 'golden';

/**
 * Ratio value - accepts either a token name or a raw CSS value
 * Examples: "widescreen", "16/9", "1.5"
 */
export type RatioValue = RatioToken | (string & {});

/**
 * Border width token names
 */
export type BorderToken = 'thin' | 'regular' | 'thick';

/**
 * Border value - accepts either a token name or a raw CSS value
 */
export type BorderValue = BorderToken | (string & {});
