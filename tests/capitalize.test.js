import capitalize from "../scripts/capitalize";

test('capitalizing the string (hello)', () => {
    expect(capitalize('hello')).toBe('Hello');
});