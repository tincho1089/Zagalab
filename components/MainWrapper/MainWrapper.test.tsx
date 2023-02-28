import React from 'react';
import { render } from '@testing-library/react';
import MainWrapper from './MainWrapper';

describe('MainWrapper', () => {
  it('renders the children and applies the provided styles and className', () => {
    const customStyle = { backgroundColor: 'red' };
    const customClass = 'custom-class';
    const { getByText } = render(
      <MainWrapper style={customStyle} className={customClass}>
        <span>Test children</span>
      </MainWrapper>
    );

    const paperElement = getByText('Test children').parentNode;
    expect(paperElement).toHaveClass('paper');
    expect(paperElement).toHaveClass(customClass);
    expect(paperElement).toHaveStyle(customStyle);
  });
});
