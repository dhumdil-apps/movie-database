export function parseRatingValue(value: string) {
  if (typeof value !== 'string') {
    return null;
  }

  try {
    const isPercentage = value.indexOf('%') !== -1;

    if (isPercentage) {
      return parseInt(value.split('%').join(''), 10); // '84%' -> 84
    }

    const score = value.split('/');

    if (score[0] && score[1]) {
      const scoreValue = parseFloat(score[0]);
      const scoreBase = parseInt(score[1], 10);

      if (scoreBase === 10) {
        return scoreValue * 10; // '8.2/10' -> 82
      }

      return scoreValue; // '70/100' -> 70
    }
  } catch (e) {
    console.warn(e);
  }

  return null;
}
