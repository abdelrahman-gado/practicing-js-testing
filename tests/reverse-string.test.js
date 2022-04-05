import reverseString from "../scripts/reverse-string";

test('reversing the string (hello)', () => {
    expect(reverseString('hello')).toBe('olleh');
});