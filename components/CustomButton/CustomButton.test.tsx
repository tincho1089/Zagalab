import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react'
import React from 'react';
import CustomButton from './CustomButton';

describe('CustomButton', () => {
  test('renders button with children and calls onClick when clicked', () => {
    const onClick = jest.fn()
    const buttonText = 'Click me!'
    const { getByText } = render(<CustomButton onClick={onClick}>{buttonText}</CustomButton>)

    // Check that button is rendered with children
    const button: HTMLElement = getByText(buttonText)
    expect(button).toBeInTheDocument()

    // Click the button and check that onClick is called
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  test('applies className and style props', () => {
    const testClassName = 'test-class'
    const testStyle = { backgroundColor: 'red' }
    const { container } = render(<CustomButton className={testClassName} style={testStyle} />)

    // Check that className and style are applied to button element
    const button: HTMLElement | null = container.querySelector('button')
    expect(button).toHaveClass('CustomButton')
    expect(button).toHaveClass(testClassName)
    expect(button).toHaveStyle(testStyle)
  })
})
