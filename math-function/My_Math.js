(function (window) {
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
    console.log(Math.pow(5, 2));

    let result = My_Math(5).pow(2).value()
    console.log(result);

})(window);
