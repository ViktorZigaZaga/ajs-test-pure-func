import getHealth from '../character';

test.each([
  ['healthy', 100],
  ['healthy', 75],
  ['wounded', 40],
  ['wounded', 15],
  ['critical', 10],
  ['critical', 1],
])('should return %s for %i level health', (statusHealth, health) => {
  const result = getHealth({ name: '', health });
  expect(result).toBe(statusHealth);
});
test('should return null without args', () => {
  const result = getHealth();
  expect(result).toBeNull();
});
