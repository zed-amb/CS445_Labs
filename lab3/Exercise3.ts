/* Re-write the following code using TypeScript Class syntax.
 Try to be as explicit as possible and add Types to everything you can.
 When you are done, transpile the TS code to JS code and inspect the JS code. */
 class Car {
     name:string;
    acceleration: number;
    constructor(name: string, acceleration: number) {
        this.name = name;
        this.acceleration = 0;
    }
    //the very shorthand method
    //constructor(public name: string, public acceleration: number = 0) {} 

    honk(): void {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed: number): void {
        this.acceleration += speed;
    }
}

let car = new Car("BMW", 0);
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60 

/* 
//By using interface
interface Car{
    //properties
    name: string;
    acceleration: number;
    //methods
    honk(): void;
    accelerate(speed: number): void;
}

let car: Car = {
    name: "BMW",
    acceleration: 0,

    honk(): void{
        console.log(` ${this.name} is saying: Toooooooooot!`);
    },

    accelerate(speed: number): void {
        this.acceleration += speed;
    }
};


car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60  */

/* 
//By using abstruct class

abstract class Car{
    name: string;
    acceleration: number;
   
    constructor(name: string){
        this.name = name;
        this.acceleration = 0;
    }
    honk(): void{
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }

    abstract accelerate(speed: number): void;
}

class BMW extends Car {
    constructor(name: string){
        super(name);
    }
    accelerate(speed: number): void {
        this.acceleration += speed;
    }
}

let bmw: BMW = new BMW("BMW")
bmw.honk(); // BMW is saying: Toooooooooot!
console.log(bmw.acceleration); // 0
bmw.accelerate(60);
console.log(bmw.acceleration); // 60
 */