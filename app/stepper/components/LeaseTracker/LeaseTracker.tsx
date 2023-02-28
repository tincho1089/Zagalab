import { FiCheck } from 'react-icons/fi';
import { Lease } from 'models'
import { leaseStatus } from '../../utilities/LeaseData'
import styles from './LeaseTracker.module.scss'
import { CustomCircleButton } from 'components/CustomCircleButton';

export interface LeaseTrackerProps {
  leaseList: Lease[]
}

export default function LeaseTracker({ leaseList }: LeaseTrackerProps) {
  return (
    <div className={styles.mainContainer}>
      {leaseList.map((lease, index) => {
        const circle = getCircleState(lease, index, leaseList.length)
        return (
          <div key={lease.id} className={index === leaseList.length - 1 ? styles.lastItemWrapper : styles.itemWrapper}>
            {circle}
          </div>
        )
      })}
    </div>
  )
}

const getCircleState = (lease: Lease, index: number, length: number) => {
  let backgroundColor = '#10A972'
  if (lease.status === leaseStatus.PENDING) {
    backgroundColor = '#FFD858'
  }
  if (lease.status === leaseStatus.UNKNOWN) {
    backgroundColor = '#BCBCCC'
  }

  return (
    <div className={styles.item} key={lease.id}>
      <div className={styles.mobileView}>
        <CustomCircleButton style={{ backgroundColor: backgroundColor }} className={styles.customCircleButton}>
          {lease.status === leaseStatus.COMPLETED ? <FiCheck className={styles.chkIcon} /> : null}
        </CustomCircleButton>
        <div className={styles.leaseItemData}>
          <label className={index == 0 || index === length - 1 ? styles.leaseNameLimits : styles.leaseNameInterior}>{lease.name}</label>
          <label className={index == 0 || index === length - 1 ? styles.leaseTimeLimits : styles.leaseTimeInterior}>{lease.time}</label>
        </div>
      </div>
      {index === length - 1 ? null : lease.status === leaseStatus.COMPLETED ? (
        <hr className={styles.hrSolid} />
      ) : (
        <hr className={styles.hrDotted} />
      )}
    </div>
  )
}
