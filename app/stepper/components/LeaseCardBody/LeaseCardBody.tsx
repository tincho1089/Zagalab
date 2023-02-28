import { CustomButton } from 'components/CustomButton';
import { MainWrapper } from 'components/MainWrapper';
import { AiFillWarning } from 'react-icons/ai';
import { leaseData } from '../../utilities/LeaseData'
import { LeaseTracker } from '../LeaseTracker'
import styles from './LeaseCardBody.module.scss'

export default function LeaseCardBody() {
  return (
    <MainWrapper className={styles.wrapper}>
      <div className={styles.flexColumn}>
        <div className={styles.leaseTrackerContainer}>
          <LeaseTracker leaseList={leaseData}></LeaseTracker>
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.paymentButtonContainer}>
            <CustomButton className={styles.paymentCustomButton}>
              <div className={styles.flexRow}>
                <AiFillWarning className={styles.icon} />
                <label>The payment failed to be processed</label>
              </div>
            </CustomButton>
          </div>
          <div className={styles.activityContainer}>
            <label className={styles.activity}>View Activity Log</label>
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}
