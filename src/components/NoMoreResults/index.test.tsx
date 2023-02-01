import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('../../store/search', () => ({
  useSearchStore: () => ({
    isLoading: false,
    totalMovies: 1,
    loadedMovies: 1,
    searchValue: '#',
  }),
}));

import { NoMoreResults, testId } from './index';

describe('NoMoreResults', () => {
  it('should render and the find root test id', async () => {
    render(<NoMoreResults />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
