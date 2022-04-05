import caesarCipher from "../scripts/caesarCipher";

test('arguments to the caesarChipher is only string', () => {
    expect(caesarCipher(1123)).toBe(null);
    expect(caesarCipher([12, 34, "heloo"])).toBe(null);
    expect(caesarCipher({ name: "ali", age: 13 })).toBe(null);
    expect(caesarCipher(false)).toBe(null);
    expect(caesarCipher()).toBe(null);
})

test('encrypt "Hello World!"', () => {
    expect(caesarCipher("Hello World!")).toBe("Uryyb Jbeyq!");
});


test('encrypt "Attack the function called zz(). can you make it 2 times ?"', () => {
    expect(caesarCipher("Attack the function called zz(). can you make it 2 times ?")).toBe(
      "Nggnpx gur shapgvba pnyyrq mm(). pna lbh znxr vg 2 gvzrf ?"
    );
})