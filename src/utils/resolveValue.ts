import type {
  SpaceValue,
  MeasureValue,
  RatioValue,
  BorderValue,
} from '../types/tokens';

const SPACE_TOKENS = [
  '3xs',
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
] as const;

const MEASURE_TOKENS = ['narrow', 'base', 'wide'] as const;

const RATIO_TOKENS = [
  'square',
  'landscape',
  'portrait',
  'widescreen',
  'ultrawide',
  'golden',
] as const;

const BORDER_TOKENS = ['thin', 'regular', 'thick'] as const;

/**
 * Resolves a space value to a CSS value
 * If the value is a token, returns the corresponding CSS variable
 * Otherwise, returns the raw value
 */
export function resolveSpaceValue(value: SpaceValue): string {
  if (SPACE_TOKENS.includes(value as (typeof SPACE_TOKENS)[number])) {
    return `var(--s-${value})`;
  }
  return value;
}

/**
 * Resolves a measure value to a CSS value
 */
export function resolveMeasureValue(value: MeasureValue): string {
  if (MEASURE_TOKENS.includes(value as (typeof MEASURE_TOKENS)[number])) {
    return `var(--m-${value})`;
  }
  return value;
}

/**
 * Resolves a ratio value to a CSS value
 */
export function resolveRatioValue(value: RatioValue): string {
  if (RATIO_TOKENS.includes(value as (typeof RATIO_TOKENS)[number])) {
    return `var(--ratio-${value})`;
  }
  return value;
}

/**
 * Resolves a border value to a CSS value
 */
export function resolveBorderValue(value: BorderValue): string {
  if (BORDER_TOKENS.includes(value as (typeof BORDER_TOKENS)[number])) {
    return `var(--border-${value})`;
  }
  return value;
}
