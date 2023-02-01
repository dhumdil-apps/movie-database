import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('../../store/search', () => ({
  useSearchStore: () => ({
    movies: [],
  }),
}));

vi.mock('../../components/Search', () => ({ Search: vi.fn() }));
vi.mock('../../components/MovieList', () => ({ MovieList: vi.fn() }));
vi.mock('../../components/LoadMore', () => ({ LoadMore: vi.fn() }));
vi.mock('../../components/NoResults', () => ({ NoResults: vi.fn() }));
vi.mock('../../components/NoResultsYet', () => ({ NoResultsYet: vi.fn() }));
vi.mock('../../components/NoMoreResults', () => ({ NoMoreResults: vi.fn() }));
vi.mock('../../components/useSearchStore', () => ({ useSearchStore: vi.fn() }));

import Home, { testId } from './index';

describe('Home', () => {
  it('should render and the find root test id', async () => {
    render(<Home />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
