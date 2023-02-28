import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CustomModal from './CustomModal'

describe('CustomModal component', () => {
  const handleClose = jest.fn()

  it('should render the modal with children when isOpen is true', () => {
    const { getByText } = render(
      <CustomModal isOpen={true} onClose={handleClose}>
        <p>Modal content</p>
      </CustomModal>
    )

    expect(getByText('Modal content')).toBeInTheDocument()
  })

  it('should not render the modal when isOpen is false', () => {
    const { queryByText } = render(
      <CustomModal isOpen={false} onClose={handleClose}>
        <p>Modal content</p>
      </CustomModal>
    )

    expect(queryByText('Modal content')).not.toBeInTheDocument()
  })

  it('should call onClose when the close button is clicked', () => {
    const { getByText } = render(
      <CustomModal isOpen={true} onClose={handleClose}>
        <p>Modal content</p>
      </CustomModal>
    )

    const closeButton = getByText('Close')
    fireEvent.click(closeButton)

    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
