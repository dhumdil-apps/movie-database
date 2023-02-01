import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('react-router-dom', () => ({
  useParams: () => ({}),
}));

vi.mock('../../api/details', () => ({
  useMovieDetailsQuery: () => ({ data: { response: {} }, isLoading: false }),
}));

vi.mock('../../store/favoriteMovies', () => ({
  useFavoriteMoviesStore: () => ({
    addToFavoriteMovies: vi.fn,
    isInFavorites: vi.fn,
  }),
}));

vi.mock('../../store/ui', () => ({
  useUIStore: () => ({
    colorScheme: 'dark',
  }),
}));

vi.mock('../../components/Rating', () => ({ Rating: vi.fn() }));
vi.mock('../../components/SimpleList', () => ({ SimpleList: vi.fn() }));

import MovieDetails, { testId } from './index';

describe('MovieDetails', () => {
  it('should render and the find root test id', async () => {
    render(<MovieDetails />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
