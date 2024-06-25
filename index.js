function sum(a, b) {
    return a + b;
}

function add(c, d) {
    return c * d;
}

function divide(f, g) {
    return f / g;
}
// Nah semisal ada function ga di tes nanti di coverage nya mungkin 'warning'

function login(email, password) {
    const data = {
        email: email,
        password: password
    }
    return data
}

function additionCalculator(...numbers) {
    return numbers.reduce((sum, item) => sum + item, 0);
}

module.exports = { sum, add, login, additionCalculator }