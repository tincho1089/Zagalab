import { render, screen } from '@testing-library/react';
import LeaseCardHeader from './LeaseCardHeader';

describe('LeaseCardHeader', () => {
  it('renders header content correctly', () => {
    render(<LeaseCardHeader />);
    const headingElement = screen.getByText(/Theresa Webb/i);
    expect(headingElement).toBeInTheDocument();
    const generateLeaseButton = screen.getByRole('button', { name: /Generate Lease/i });
    expect(generateLeaseButton).toBeInTheDocument();
    const contactResidentButton = screen.getByRole('button', { name: /Contact Resident/i });
    expect(contactResidentButton).toBeInTheDocument();
  });
});
