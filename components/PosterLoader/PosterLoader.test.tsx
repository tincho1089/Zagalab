import { render, RenderResult } from '@testing-library/react';
import PosterLoader from './PosterLoader';

describe('PosterLoader', () => {
  it('renders the correct number of poster loaders', () => {
    const count = 5;
    const { container }: RenderResult = render(<PosterLoader count={count} />);
    const posterLoaders = container.querySelectorAll('.posterLoaderCol');
    expect(posterLoaders.length).toBe(count);
  });
});
