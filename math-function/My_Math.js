(function (window) {
    function My_Math(init) {

        function Calculator() {
            this.init = init;
        };
    
        Calculator.prototype.plus = function(val) {
            this.init += val
            return this
        };
    
        Calculator.prototype.minus = function(val) {
            this.init -= val
            return this
        };
    
    
        Calculator.prototype.divide = function(val) {
            if (val === 0) {
                this.init /= 1
            } else {
                this.init /= val
            }
            return this
        };
    
        Calculator.prototype.multi = function(val) {
            this.init *= val
            return this
        };
    
        Calculator.prototype.value = function() {
            return this.init
        };
    
        Calculator.prototype.revert = function() {
            this.init *= -1
            return this
        };
    
        Calculator.prototype.pow = function (val) {
            this.init = this.init ** val
            return this
        };
    
        Calculator.prototype.factorial = function() {
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
    
        Calculator.prototype.format = function (callback) {
            return callback(this.init)  
        };
    
        return new Calculator
    };    
})(window);
