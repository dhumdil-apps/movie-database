import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('react-router-dom', () => ({ Link: vi.fn() }));

import { MovieCard, testId } from './index';

const props = {
  imdbID: '#',
  Title: '#',
  Type: '#',
  Year: '#',
  Poster: '#',
};

describe('MovieCard', () => {
  it('should render and the find root test id', async () => {
    render(<MovieCard {...props} />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
