import {formatmoney1} from '../src/tool';
// describe("formatmoney function", () => {
//   test("formatmoney1", () => {
//     expect(formatmoney1(0)).toBe('money1');
//   })
// });

// test('object assignment', () => {
//   const data = {one: 1};
//   data['two'] = 2;
//   expect(data).toEqual({one: 1, two: 2});
// });

// test('null', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
//   // expect(n).toBeUndefined();
// });

// test('two plus two', () => {
//   const value = 2 + 2;
//   expect(value).toBeGreaterThan(3);
//   expect(value).toBeGreaterThanOrEqual(3.5);
//   expect(value).toBeLessThan(5);
//   expect(value).toBeLessThanOrEqual(4.5);

//   // toBe and toEqual are equivalent for numbers
//   expect(value).toBe(4);
//   expect(value).toEqual(4);
// });

// test('两个浮点数字相加', () => {
//   const value = 0.1 + 0.2;
//   expect(value).toBe(0.3);           //这句会报错，因为浮点数有舍入误差
//   expect(value).toBeCloseTo(0.3); // 这句可以运行
// });

//字符串
// test('there is no I in team', () => {
//   expect('team').not.toMatch(/I/);
// });

// test('but there is a "stop" in Christoph', () => {
//   expect('Christoph').toMatch(/stop/);
// });

//可以通过 toContain来检查一个数组或可迭代对象是否包含某个特定项:
// const shoppingList = [
//   'diapers',
//   'kleenex',
//   'trash bags',
//   'paper towels',
//   'milk',
// ];

// test('the shopping list has milk on it', () => {
//   expect(shoppingList).toContain('milk');
//   expect(new Set(shoppingList)).toContain('milk');
// });

//如果您想测试一个特定的函数在被调用时是否抛出错误
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  // expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  // expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  // expect(() => compileAndroidCode()).toThrow(/JDK/);
});