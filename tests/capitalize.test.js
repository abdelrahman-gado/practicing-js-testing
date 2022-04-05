import capitalize from "../scripts/capitalize";

test('arguments to the capitalize should only be string', () => {
    expect(capitalize(1324)).toBe(null);
    expect(capitalize({ "name": "ali" })).toBe(null);
    expect(capitalize([1, 2])).toBe(null);
    expect(capitalize()).toBe(null);
});

test('capitalizing the string (hello)', () => {
    expect(capitalize('hello')).toBe('Hello');
});