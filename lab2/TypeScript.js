"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Blue;
console.log(c); //2
//Tuple
let family;
family = [[1, "John"], [2, "Mike"], [3, "Mada"]];
console.log(family);
class Employee {
    constructor(empCode, empName) {
        this.empCode = empCode;
        this.empName = empName;
    }
    setEmpName(name) {
        this.empName = name;
    }
    getEmpName() {
        return this.empName;
    }
}
class MAP {
    constructor(code, name, grade) {
        this.code = code;
        this.name = name;
        this.grade = grade;
    }
    setGrade(grade) {
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
}
let map = new MAP(445, 'MAP', 100);
console.log(map);
//Overriding
class Meditator {
    constructor(name) { this.name = name; }
    meditate(duration = 20) {
        console.log(this.name + " is meditating for " + duration + " mins!");
    }
}
class Sidha extends Meditator {
    constructor(name) {
        super(name);
    }
    meditate(duration = 40) {
        console.log('Meditation started');
        super.meditate(duration);
    }
}
let john = new Sidha("John ");
john.meditate(); // Meditation started John is medi tating for 40 mins!
let zola = new Meditator('Zola');
zola.meditate();
