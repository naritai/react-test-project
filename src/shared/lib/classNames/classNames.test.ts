import { classNames } from './classNames'

const baseClass = 'baseClass'
const class1 = 'class1'
const class2 = 'class2'
const class3 = 'class3'

describe('classNames', () => {
  test(`call with first param only should return ${baseClass}`, () => {
    expect(classNames(baseClass)).toBe(baseClass)
  })

  test('call with additional classes should return list of additional classes', () => {
    const expected = `${baseClass} ${class1} ${class2} ${class3}`
    expect(classNames(baseClass, {}, [class1, class2, class3])).toBe(expected)
  })

  test('call with mods should add only truthy keys as classes', () => {
    const mods = {
      [class1]: true,
      [class2]: true,
      [class3]: false
    }
    const expected = `${baseClass} ${class1} ${class2}`
    expect(classNames(baseClass, mods)).toBe(expected)
  })

  test('call with all params', () => {
    const mods = {
      [class1]: true,
      [class2]: true,
      [class3]: false
    }
    const additional = [class3]
    const expected = `${baseClass} ${class3} ${class1} ${class2}`
    expect(classNames(baseClass, mods, additional)).toBe(expected)
  })

  test('call with unexpected undefined value as additional class', () => {
    const expected = baseClass
    expect(classNames(baseClass, {}, [undefined])).toBe(expected)
  })
})
