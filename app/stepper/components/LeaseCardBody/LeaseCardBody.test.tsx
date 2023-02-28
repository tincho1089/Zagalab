import { render, screen } from '@testing-library/react';
import LeaseCardBody from './LeaseCardBody';

describe('LeaseCardBody', () => {
  it('should render the payment failure button', () => {
    const { getByText } = render(<LeaseCardBody />);
    expect(getByText(/The payment failed to be processed/i)).toBeInTheDocument();
  });

  it('should render the activity log label', () => {
    const { getByText } = render(<LeaseCardBody />);
    expect(getByText(/View Activity Log/i)).toBeInTheDocument();
  });
});
