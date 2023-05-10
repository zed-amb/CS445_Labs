"use strict"
let fibonacci = (function () {
    let obj = {};
    function fun(n) {
        let value;
        if (n in obj) {
            value = obj[n];
        }
        else {
            if (n === 0 | n === 1) {
                value = 1;
            } else {
                value = fun(n - 1) + fun(n - 2)
            }
            obj[n] = value;
        }
        return value;
    }
    return fun
})();

 console.log(fibonacci(8));//34
 console.log(fibonacci(10));//89
 console.log(fibonacci(5));//8