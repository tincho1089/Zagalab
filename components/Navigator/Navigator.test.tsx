import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navigator from './Navigator';
import { Route } from 'models';

describe('Navigator', () => {
  const pathNames: Route[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  it('renders a button for each pathName', () => {
    render(<Navigator pathNames={pathNames} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(pathNames.length);
  });

  it('clicking on a button navigates to the corresponding path', () => {
    render(<Navigator pathNames={pathNames} />);
    const firstButton = screen.getByText(pathNames[0].name);
    userEvent.click(firstButton);
    expect(window.location.pathname).toBe(pathNames[0].path);
  });
});
