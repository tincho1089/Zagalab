import { MainWrapper } from 'components';
import { LeaseCard } from './components';
import styles from './Stepper.module.scss';

export default function Stepper() {
  return (
      <MainWrapper className={styles.Wrapper}>
        <div className={styles.flexColumn}>
          <div className={styles.lastUpdateSpace}>
            <label className={styles.fontsAb}>last update: 30m ago</label>
          </div>
          <div className={styles.headerContainer}>
            <h1 className={styles.titleSpace}>1901 Thornridge Cir. Shiloh, HI</h1>
            <div className={styles.totalAmountSpace}>
              <h1 className={styles.fontsAb}>$2,200 </h1>
              <label className={styles.labelTimePeriod}>/ month</label>
            </div>
          </div>
          <LeaseCard />
        </div>
      </MainWrapper>
  )
}
