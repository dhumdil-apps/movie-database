import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('@tanstack/react-query', () => ({
  useMutation: vi.fn(),
}));

vi.mock('../../api/details', () => ({
  fetchMovies: vi.fn,
}));

vi.mock('../../store/search', () => ({
  useSearchStore: () => ({
    resetSearchValue: vi.fn,
    loadFirstPage: vi.fn,
    setSearchValue: vi.fn,
    searchValue: '#',
    isLoading: false,
  }),
}));

vi.mock('../../store/ui', () => ({
  useUIStore: () => ({
    colorScheme: 'dark',
  }),
}));

import { Search, testId } from './index';

describe('Search', () => {
  it('should render and the find root test id', async () => {
    render(<Search />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
