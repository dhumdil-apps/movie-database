import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('@tanstack/react-query', () => ({
  useMutation: vi.fn(),
}));

vi.mock('../../api/movies', () => ({
  fetchMovies: vi.fn,
}));

vi.mock('../../store/search', () => ({
  useSearchStore: () => ({
    setLoading: vi.fn,
    resetSearchValue: vi.fn,
    loadNextPage: vi.fn,
    isLoading: false,
    searchValue: '#',
    page: 0,
    totalMovies: 0,
    loadedMovies: 0,
  }),
}));

vi.mock('../../store/ui', () => ({
  useUIStore: () => ({
    colorScheme: 'dark',
  }),
}));

import { LoadMore, testId } from './index';

describe('LoadMore', () => {
  it('should render and the find root test id', async () => {
    render(<LoadMore />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
