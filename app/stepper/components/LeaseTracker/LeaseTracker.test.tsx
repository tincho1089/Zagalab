import { render, screen } from '@testing-library/react';
import LeaseTracker from './LeaseTracker';
import { Lease } from 'models';
import { leaseStatus } from '../../utilities/LeaseData';

const leases: Lease[] = [
  { id: 1, name: 'Lease 1', time: '12 months', status: leaseStatus.COMPLETED },
  { id: 2, name: 'Lease 2', time: '6 months', status: leaseStatus.PENDING },
  { id: 3, name: 'Lease 3', time: '3 months', status: leaseStatus.UNKNOWN },
];

describe('LeaseTracker', () => {
  it('should render each lease item correctly', () => {
    render(<LeaseTracker leaseList={leases} />);
    
    const leaseNames = leases.map((lease) => screen.getByText(lease.name));
    expect(leaseNames).toHaveLength(3);

    const leaseTimes = leases.map((lease) => screen.getByText(lease.time));
    expect(leaseTimes).toHaveLength(3);

    const checkIcons = document.querySelector('.chkIcon');
    expect(checkIcons).toBeInTheDocument();
    const pendingCircles = document.querySelector('.leaseNameLimits');
    expect(pendingCircles).toBeInTheDocument();
  });

});
