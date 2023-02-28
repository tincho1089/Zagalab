import { ReactNode, CSSProperties } from 'react'
import styles from './MainWrapper.module.scss'

interface MainWrapperProps {
  children: ReactNode
  style?: CSSProperties
  className?: string
}

export default function MainWrapper({ children, style, className }: MainWrapperProps) {
  return (
    <div className={`${styles.paper} ${className}`} style={style}>
      {children}
    </div>
  )
}
