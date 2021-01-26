const assert = require('chai').assert

function My_Math(init) {
    const getInitValue = () => init;

    class Math {
        constructor() {
            this.init = getInitValue();
        };

        plus(val) {
            this.init += val
            return this
        };

        minus(val) {
            this.init -= val
            return this
        };

        divide(val) {
            if (val === 0) {
                this.init /= 1
            } else {
                this.init /= val
            }
            return this
        };

        multi(val) {
            this.init *= val
            return this
        };

        value() {
            return this.init
        };

        revert() {
            this.init *= -1
            return this
        };

        pow(val) {
            this.init = this.init ** val
            return this
        };

        factorial() {
            if (this.init <= 0) {
                this.init = 1
                return this
            };

            let arr = [];
            let firstNum = this.init;

            while (firstNum > 0) {
                arr.push(firstNum)
                firstNum--
            };

            this.init = arr.reduce((a, b) => a * b)
            return this
        };

        format(callback) {
            return callback(this.init)  
        };
    };

    return new Math
};

describe('Math function', () => {
    it('should perform basic math operations', () => {
        const result = My_Math(5)
                        .plus(5)
                        .minus(4)
                        .pow(2)
                        .divide(2)
                        .multi(3)
                        .value()
        assert.strictEqual(result, 54)
    });

    it('should calculate a factorial of an integer', () => {
        const result_1 = My_Math(5).factorial().value()
        assert.strictEqual(result_1, 120)

        const result_2 = My_Math(0).factorial().value()
        assert.strictEqual(result_2, 1)

        const result_3 = My_Math(-1).factorial().value()
        assert.strictEqual(result_3, 1)

        const result_4 = My_Math(1).factorial().value()
        assert.strictEqual(result_4, 1)
    });

    it('should revert integer\'s sign', () => {
        const result = My_Math(1).revert().value()
        assert.strictEqual(result, -1)
    });

    it('.format method should perform an action defined in a callback passed to it', () => {
        function getStr(val) {
            return `The result is ${val}`;
        }
        const result = My_Math(1).format(getStr)
        assert.strictEqual(result, 'The result is 1')
    });

    it('methods must return context', () => {
        const result = My_Math(5).plus(5)
        assert.typeOf(result, 'object')
    });

    it('.format should not return context', () => {
        function getStr(val) {
            return `The result is ${val}`;
        }
        const result = My_Math(1).format(getStr)
        assert.notTypeOf(result, 'object')
    })
})
