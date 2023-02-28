import { Lease } from 'models'

export const leaseStatus = {
  COMPLETED: 'Completed',
  PENDING: 'Pending',
  UNKNOWN: 'Unknown',
}

export const leaseData: Lease[] = [
  {
    id: 1,
    name: 'Lease Sent',
    time: '1 day ago',
    status: leaseStatus.COMPLETED,
  },
  {
    id: 2,
    name: 'Signed by resident(1/2)',
    time: '5 hours ago',
    status: leaseStatus.COMPLETED,
  },
  {
    id: 3,
    name: 'Signed by PM',
    time: '',
    status: leaseStatus.COMPLETED,
  },
  {
    id: 4,
    name: 'Deposit / Fees paid',
    time: '',
    status: leaseStatus.PENDING,
  },
  {
    id: 5,
    name: 'Move-in',
    time: '',
    status: leaseStatus.UNKNOWN,
  },
]
