import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('react-router-dom', () => ({ Link: vi.fn() }));

vi.mock('../ToggleColorScheme', () => ({ ToggleColorScheme: vi.fn() }));

vi.mock('../../store/router', () => ({
  useRouterStore: () => ({
    activeRoute: '/',
  }),
}));

import { AppHeader, testId } from './index';

describe('AppHeader', () => {
  it('should render and the find root test id', async () => {
    render(<AppHeader />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
