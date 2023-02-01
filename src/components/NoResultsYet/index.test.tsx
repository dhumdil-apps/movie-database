import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('../../store/search', () => ({
  useSearchStore: () => ({
    searchValue: '',
    isLoading: false,
    page: 0,
  }),
}));

vi.mock('../../store/ui', () => ({
  useUIStore: () => ({
    colorScheme: 'dark',
  }),
}));

import { NoResultsYet, testId } from './index';

describe('NoResultsYet', () => {
  it('should render and the find root test id', async () => {
    render(<NoResultsYet />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
