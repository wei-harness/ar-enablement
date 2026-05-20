import type { ReactNode } from 'react'
import styles from './SectionHeader.module.scss'

interface SectionHeaderProps {
  eyebrow?: ReactNode
  title: ReactNode
  sub?: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  as: Heading = 'h2',
  className,
}: SectionHeaderProps) {
  return (
    <header className={`${styles.sectionHdr}${className ? ` ${className}` : ''}`}>
      {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
      <Heading className={styles.title}>{title}</Heading>
      {sub && <p className={styles.sub}>{sub}</p>}
    </header>
  )
}
