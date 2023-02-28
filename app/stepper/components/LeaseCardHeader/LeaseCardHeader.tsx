import { CustomButton } from 'components/CustomButton';
import { CustomCircleButton } from 'components/CustomCircleButton';
import { IoClose } from 'react-icons/io5';
import styles from './LeaseCardHeader.module.scss'

export default function LeaseCardHeader() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.userHeader}>
        <h2 className={styles.fontsAb}>Theresa Webb</h2>
        <label className={styles.label}>+ 1 co-applicant</label>
      </div>
      <div className={styles.stepperButtonsContainer}>
        <CustomButton>Generate Lease</CustomButton>
        <CustomButton className={styles.buttonResident}>Contact Resident</CustomButton>
        <CustomCircleButton>
          <IoClose className={styles.icon} />
        </CustomCircleButton>
      </div>
    </div>
  )
}
