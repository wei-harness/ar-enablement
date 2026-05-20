import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import styles from './Card.module.scss'

type CardPadding = 'sm' | 'md' | 'lg'

interface CardBaseProps {
  padding?: CardPadding
  className?: string
  children?: ReactNode
}

type DivCardProps = CardBaseProps & {
  interactive?: false
} & Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'children'>

type ButtonCardProps = CardBaseProps & {
  interactive: true
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>

type CardProps = DivCardProps | ButtonCardProps

/**
 * Default elevated card surface: 1px border, whisper shadow, 8px radius.
 * Pass `interactive` to render as a button with hover-lift (translateY + shadow upgrade).
 */
export function Card(props: CardProps) {
  const { padding = 'lg', className, children, interactive, ...rest } = props
  const classes = [
    styles.card,
    styles[`pad-${padding}`],
    interactive && styles.interactive,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (interactive) {
    return (
      <button
        type="button"
        className={classes}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    )
  }

  return (
    <div
      className={classes}
      {...(rest as HTMLAttributes<HTMLDivElement>)}
    >
      {children}
    </div>
  )
}
