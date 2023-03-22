import { capitalizeEveryWord, formatNumber, isNotEmptyArray } from 'src/utils/helpers'

describe('isNotEmptyArray tests', () => {
  test('Array with length greater than to 0', () => {
    const array = [1, 2, 3, 4, 5]
    expect(isNotEmptyArray(array)).toBeTruthy()
  })

  test('Array with length equal to 0', () => {
    const array = []
    expect(isNotEmptyArray(array)).toBeFalsy()
  })
})

test('Capitalize the first letter every word in a text', () => {
  expect(capitalizeEveryWord('hello world')).toBe('Hello World')
})

test('Format number with commas', () => {
  expect(formatNumber(10000)).toBe('10,000')
})
