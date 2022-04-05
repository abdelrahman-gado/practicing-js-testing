import reverseString from "../scripts/reverse-string";

test("arguments to the reverseString should only be string", () => {
  expect(reverseString(1324)).toBe(null);
  expect(reverseString({ name: "ali" })).toBe(null);
  expect(reverseString([1, 2])).toBe(null);
  expect(reverseString()).toBe(null);
});


test('reversing the string (hello)', () => {
    expect(reverseString('hello')).toBe('olleh');
});