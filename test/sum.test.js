const { add, sum, login, additionCalculator } = require('../index');

// DESCRIBE / DI GRUPKAN
describe('Calculator', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds 10 + 2 not to equal 15', () => {
        expect(sum(10, 2)).not.toBe(13);
    });

    test('multiple 3 * 2 equals 6', () => {
        expect(add(3, 2)).toBe(6);
    })
})

describe('Addition Calculator', () => {
    test("addition of 4 and 6 to equal 10", () => {
        expect(additionCalculator(4, 6)).toBe(10);
    });

    test("addition of 100, 50, 20, 45 and 30 to equal 245", () => {
        expect(additionCalculator(100, 50, 20, 45, 30)).toBe(245);
    });

    test("addition of 7 to equal 7", () => {
        expect(additionCalculator(7)).toBe(7);
    });

    test("addition of no argument provided to equal 0", () => {
        expect(additionCalculator()).toBe(0);
    });
})


test('apakah function login sudah sesuai ?', () => {
    const email = 'test@example.com';
    const password = 'test123'

    // Kalau toEqual pakai buat objek, kalau toBe tidak bisa

    expect(login(email, password)).toEqual({
        email: 'test@example.com',
        password: 'test123'
    });
})