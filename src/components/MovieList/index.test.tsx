import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('../MovieCard', () => ({ MovieCard: vi.fn() }));

import { MovieList, testId } from './index';

const mockItem = {
  Title: '#',
  Year: '#',
  imdbID: '#',
  Type: '#',
  Poster: '#',
};

describe('MovieList', () => {
  it('should render and the find root test id', async () => {
    render(<MovieList list={[mockItem]} />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
