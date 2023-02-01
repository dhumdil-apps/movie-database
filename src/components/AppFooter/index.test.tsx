import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { AppFooter, testId } from './index';

describe('AppFooter', () => {
  it('should render and the find root test id', async () => {
    render(<AppFooter />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
