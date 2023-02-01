import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('../../store/ui', () => ({
  useUIStore: () => ({
    colorScheme: 'dark',
  }),
}));

import { ToggleColorScheme, testId } from './index';

describe('ToggleColorScheme', () => {
  it('should render and the find root test id', async () => {
    render(<ToggleColorScheme />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
