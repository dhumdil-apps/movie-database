import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { AppFooter } from './index';

describe('AppFooter', () => {
  it('checks footer visibility', async () => {
    render(<AppFooter />);

    expect(screen.getByTestId('footer')).toBeVisible();
  });
});
