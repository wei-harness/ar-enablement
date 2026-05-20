import type { CSSProperties, ReactNode } from 'react'
import styles from './StatCard.module.scss'

interface StatCardProps {
  value: ReactNode
  label: ReactNode
  /** Override the value color. Pass a CSS color or `var(--color-X)` token. Defaults to FinOps teal. */
  valueColor?: string
  className?: string
}

export function StatCard({ value, label, valueColor, className }: StatCardProps) {
  const style = valueColor
    ? ({ '--stat-value-color': valueColor } as CSSProperties)
    : undefined
  return (
    <div className={`${styles.statCard}${className ? ` ${className}` : ''}`} style={style}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

interface StatGridProps {
  children: ReactNode
  /** Minimum column width in CSS units. Default `180px`. */
  minCol?: string
  className?: string
}

export function StatGrid({ children, minCol = '180px', className }: StatGridProps) {
  const style = { '--stat-grid-min': minCol } as CSSProperties
  return (
    <div
      className={`${styles.statGrid}${className ? ` ${className}` : ''}`}
      style={style}
    >
      {children}
    </div>
  )
}
