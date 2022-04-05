const calculator = {

    add(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return null;
        }
        return num1 + num2;
    }, 

    substract(num1, num2) {
        if (typeof num1 !== "number" || typeof num2 !== "number") {
          return null;
        }
        return Math.max(num1, num2) - Math.min(num1, num2);
    },

    divide(num1, num2) {
        if (typeof num1 !== "number" || typeof num2 !== "number") {
          return null;
        }

        if (num2 === 0) {
            return null;
        }

        return num1 / num2;
    },

    multiply(num1, num2) {
        if (typeof num1 !== "number" || typeof num2 !== "number") {
          return null;
        }

        return num1 * num2;
    }
}


export default calculator;