import calculator from "../scripts/calculator";


test('inputs to the function must be only numbers', () => {
    expect(calculator.add(1, "2")).toBe(null);
    expect(calculator.add("1", "2")).toBe(null);
    expect(calculator.substract("hello", "2")).toBe(null);
    expect(calculator.substract(true, false)).toBe(null);
    expect(calculator.divide({}, [1, 2])).toBe(null);
    expect(calculator.divide([{}], [1, 2])).toBe(null);
    expect(calculator.multiply({ 1: "ali" }, { 2: "mohammed" }));
    expect(calculator.multiply()).toBe(null);
})



test('add two numbers', () => {
    expect(calculator.add(2, 4)).toBe(6);
    expect(calculator.add(30, 40)).toEqual(70);
});


test('substract two numbers', () => {
    expect(calculator.substract(10, 5)).toBe(5);
    expect(calculator.substract(20, 2)).toEqual(18);
});

test('Substracting two numbers where the first is the smallest', () => {
    expect(calculator.substract(5, 10)).toBe(5);
    expect(calculator.substract(2, 20)).toBe(18);
});

test('dividing two numbers', () => {
    expect(calculator.divide(20, 10)).toBeCloseTo(2);
    expect(calculator.divide(2, 4)).toBeCloseTo(0.5);
});

test('dividing by zero', () => {
    expect(calculator.divide(5, 0)).toBe(null);
});

test('multiplying two numbers', () => {
    expect(calculator.multiply(2, 3.5)).toBeCloseTo(7);
    expect(calculator.multiply(2, 5)).toBeCloseTo(10);
});