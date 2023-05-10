"use strict";
/* Re-write the following code using TypeScript Class syntax.
 Try to be as explicit as possible and add Types to everything you can.
 When you are done, transpile the TS code to JS code and inspect the JS code. */
class BaseObject {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    calcSize() {
        return this.width * this.length;
    }
}
let rectangle = new BaseObject(5, 2);
console.log(rectangle.calcSize()); // 10
