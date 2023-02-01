import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('../../store/favoriteMovies', () => ({
  useFavoriteMoviesStore: () => ({
    deleteFromFavoriteMovies: vi.fn,
    favoriteMovies: [],
  }),
}));

vi.mock('../../components/MovieList', () => ({ MovieList: vi.fn() }));

import Favorites, { testId } from './index';

describe('Favorites', () => {
  it('should render and the find root test id', async () => {
    render(<Favorites />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
