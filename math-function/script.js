function getStr(val) {
    return `The result is ${val}`;
}

function My_Math(init) {
    if (!(this instanceof My_Math)) {
        return new My_Math(init);
    }

    this.init = init;
}

My_Math.prototype.plus = function(val) {
        this.init += val
        return this
    };

My_Math.prototype.minus = function(val) {
    this.init -= val
    return this
};

My_Math.prototype.divide = function(val) {
    if (val === 0) {
        this.init /= 1
    } else {
        this.init /= val
    }
    return this
};

My_Math.prototype.multi = function(val) {
    this.init *= val
    return this
};

My_Math.prototype.value = function() {
    return this.init
};

My_Math.prototype.revert = function() {
    this.init *= -1
    return this
};

My_Math.prototype.pow = function (val) {
    this.init = Math.pow(this.init, val)
    return this
};

My_Math.prototype.factorial = function() {
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

My_Math.prototype.format = function (callback) {
    return callback(this.init)  
};


let result = My_Math(1)
    .plus(10)
    .minus(12)
    .divide(0)
    .value();

console.log(result); // -1

let formatted_result = My_Math(10)
    .plus(10)
    .format(getStr);

console.log(formatted_result); // The result is 20;
