import { expect, test } from 'vitest';

import { parseRatingValue } from './parseRatingValue';

test('parseRatingValue("50%")', () => {
  expect(parseRatingValue('50%')).toBe(50);
});

test('parseRatingValue("5/10")', () => {
  expect(parseRatingValue('5/10')).toBe(50);
});

test('parseRatingValue("50/100")', () => {
  expect(parseRatingValue('50/100')).toBe(50);
});

test('parseRatingValue("#")', () => {
  expect(parseRatingValue('#')).toBe(null);
});
