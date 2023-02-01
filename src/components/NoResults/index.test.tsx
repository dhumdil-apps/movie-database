import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('../../store/search', () => ({
  useSearchStore: () => ({
    searchValue: '#',
    isLoading: false,
    totalMovies: 0,
  }),
}));

import { NoResults, testId } from './index';

describe('NoResults', () => {
  it('should render and the find root test id', async () => {
    render(<NoResults />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
