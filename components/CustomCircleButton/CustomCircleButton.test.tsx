import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CustomCircleButton from './CustomCircleButton'

describe('CustomCircleButton component', () => {
  it('should render the button with children', () => {
    const { getByText } = render(<CustomCircleButton>Hello, World!</CustomCircleButton>)
    expect(getByText('Hello, World!')).toBeInTheDocument()
  })

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn()
    const { getByRole } = render(<CustomCircleButton onClick={handleClick}>Click me!</CustomCircleButton>)
    const button = getByRole('button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should add the provided className to the button', () => {
    const { container } = render(<CustomCircleButton className="custom-class">Styled button</CustomCircleButton>)
    const button = container.querySelector('button')
    expect(button).toHaveClass('custom-class')
  })
})
