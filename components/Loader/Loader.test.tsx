import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', (): void => {
  it('renders the Loader component with the correct CSS classes', (): void => {
    const { container }: RenderResult = render(<Loader />);
    const loaderContainer: Element | null = container.firstChild;
    expect(loaderContainer).toHaveClass('loaderContainer');

    const pokeballLoader: Element | null = loaderContainer?.firstChild;
    expect(pokeballLoader).toHaveClass('pokeballLoader');

    const pokeballTop: Element | null = pokeballLoader?.firstChild;
    expect(pokeballTop).toHaveClass('pokeballTop');

    const pokeballBottom: Element | null = pokeballLoader?.children[1];
    expect(pokeballBottom).toHaveClass('pokeballBottom');

    const pokeballCenter: Element | null = pokeballLoader?.children[2];
    expect(pokeballCenter).toHaveClass('pokeballCenter');
  });
});
