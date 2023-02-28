import React, { FC, ReactNode } from 'react'
import { CustomButton } from '../CustomButton'
import styles from './CustomModal.module.scss'

type CustomModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const CustomModal: FC<CustomModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {children}
        <CustomButton className={styles.closeBtn} onClick={onClose}>Close</CustomButton>
      </div>
    </div>
  )
}

export default CustomModal
