import { expect, test } from 'vitest';

import { parseRatingValue } from './parseRatingValue';

test('parseRatingValue()', () => {
  expect(parseRatingValue('50%')).toBe(50);
  expect(parseRatingValue('5/10')).toBe(50);
  expect(parseRatingValue('50/100')).toBe(50);
});
