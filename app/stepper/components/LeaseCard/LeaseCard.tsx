import { MainWrapper } from 'components'
import { LeaseCardBody } from '../LeaseCardBody'
import { LeaseCardHeader } from '../LeaseCardHeader'
import styles from './LeaseCard.module.scss'

export default function LeaseCard() {
  return (
    <MainWrapper className={styles.LeaseCardWrapper}>
      <LeaseCardHeader />
      <LeaseCardBody />
    </MainWrapper>
  )
}
