import type { CSSProperties, ReactNode } from 'react'
import styles from './Badge.module.scss'

type BadgeVariant =
  | 'now'
  | 'soon'
  | 'later'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'muted'
type BadgeShape = 'pill' | 'sharp'

interface BadgeProps {
  variant?: BadgeVariant
  shape?: BadgeShape
  /** Custom hue. When set, overrides the variant color via `color-mix` tinting. */
  hue?: string
  children: ReactNode
  className?: string
}

/**
 * Compact status or label chip. `pill` shape (24px radius) for action/category tags;
 * `sharp` shape (4px radius) for label-on-content tags. Roadmap status badges use
 * the now/soon/later variants and pair color with explicit text.
 */
export function Badge({
  variant = 'muted',
  shape = 'pill',
  hue,
  children,
  className,
}: BadgeProps) {
  const style = hue
    ? ({
        '--badge-hue': hue,
        background: `color-mix(in srgb, ${hue} 10%, transparent)`,
        color: hue,
        border: `1px solid color-mix(in srgb, ${hue} 25%, transparent)`,
      } as CSSProperties)
    : undefined
  const classes = [
    styles.badge,
    styles[`shape-${shape}`],
    !hue && styles[`v-${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <span className={classes} style={style}>
      {children}
    </span>
  )
}
