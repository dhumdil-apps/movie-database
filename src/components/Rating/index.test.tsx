import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Rating, testId } from './index';

const props = {
  label: '#',
  value: 1,
  valueLabel: '',
};

describe('Rating', () => {
  it('should render and the find root test id', async () => {
    render(<Rating {...props} />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
