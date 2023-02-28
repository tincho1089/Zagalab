import React, { FC } from 'react'
import styles from './CustomCircleButton.module.scss'

interface CustomCircleButtonProps {
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: () => void
  className?: string
}

const CustomCircleButton: FC<CustomCircleButtonProps> = ({ style, children, onClick, className }) => {
  return (
    <button style={style} onClick={onClick} className={`${styles.CustomButton} ${className}`}>
      {children}
    </button>
  )
}

export default CustomCircleButton
