import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { SimpleList, testId } from './index';

const props = {
  list: [{ label: 'label', value: 'value' }],
};

describe('SimpleList', () => {
  it('should render and the find root test id', async () => {
    render(<SimpleList {...props} />);

    expect(screen.getByTestId(testId.root)).toBeVisible();
  });
});
