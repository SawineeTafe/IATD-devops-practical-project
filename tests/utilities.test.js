import { isValidDateString, wrapString } from '../src/utilities';

test('wrapString: wrap single word over two lines', () => {
  expect(wrapString('Long', 3)).toBe('Lo-\nng');
});

test('wrapString: wrap multiple words over two lines', () => {
  expect(wrapString('Too long', 4)).toBe('Too\nlong');
});

test('wrapString: wrap complex sentence', () => {
  expect(
    wrapString('This is a complex sentence that needs to be wrapped', 6)
  ).toBe('This\nis a\ncompl-\nex se-\nntence\nthat\nneeds\nto be\nwrapp-\ned');
});

// PLACE TESTS FOR isValidDateString UNDER HERE

// Test for invalid string
test('isValidDateString: invalid string returns false', () => {
  expect(isValidDateString('hello world')).toBe(false);
});

// Test for the wrong amount of "date segments" (see comments in utilities.js for more info)
test('isValidDateString: missing segments returns false', () => {
  expect(isValidDateString('12/2024')).toBe(false); // only two segments
});

// Test for wrong number of digits in the day
test('isValidDateString: wrong digits in day returns false', () => {
  expect(isValidDateString('1/12/2024')).toBe(false); // only 1 digit in day
});

// Test for wrong number of digits in the month
test('isValidDateString: wrong digits in month returns false', () => {
  expect(isValidDateString('12/2/2024')).toBe(false); // only 1 digit in month
});

// Test for wrong number of digits in the year
test('isValidDateString: wrong digits in year returns false', () => {
  expect(isValidDateString('12/12/24')).toBe(false); // only 2 digits in year
});

// Test for day outside of month's number of days
test('isValidDateString: too many days in month returns false', () => {
  expect(isValidDateString('31/04/2024')).toBe(false); // April has 30 days
});

// Test for month greater than 12
test('isValidDateString: month > 12 returns false', () => {
  expect(isValidDateString('15/13/2024')).toBe(false);
});

// Test for day <= 0
test('isValidDateString: day <= 0 returns false', () => {
  expect(isValidDateString('00/05/2024')).toBe(false);
});

test('failing test', () => {
  expect(1 + 1).toBe(3); // ❌ Intentionally wrong
});
