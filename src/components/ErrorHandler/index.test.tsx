import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { ErrorHandler, testId } from './index';

describe('ErrorHandler', () => {
  it('should render and the find root test id', async () => {
    render(<ErrorHandler error={new Error()} resetErrorBoundary={vi.fn()} />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
