
import addHttpsToUrl from '../addHttpsToUrl';

it('replace insecure http for https', () => {
  const url = 'http://my.url.com';
  const expected = 'https://my.url.com';

  expect(addHttpsToUrl(url)).toBe(expected);
});
