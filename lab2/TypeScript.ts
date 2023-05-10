enum Color { Red = 0, Green, Blue };
let c: Color = Color.Blue;

console.log(c); //2



//Tuple
let family: [number, string][];
family = [[1, "John"], [2, "Mike"], [3, "Mada"]];

console.log(family);



interface IEmployee {
    empCode: number;
    empName: string;
    setEmpName(name: string): void;
    getEmpName: () => string;
}


class Employee implements IEmployee {
    empCode: number;
    empName: string;
    constructor(empCode: number, empName: string) {
        this.empCode = empCode;
        this.empName = empName;
    }

    setEmpName(name: string): void {
        this.empName = name;
    }
    getEmpName(): string {
        return this.empName;
    }
}

interface ICourse {
    code: number;
    name: string;
    grade: number;
    setGrade(grade: number): void;
    getGrade(): number;
}

class MAP implements ICourse {
    code: number;
    name: string;
    grade: number;

    constructor(code: number, name: string, grade: number) {
        this.code = code;
        this.name = name;
        this.grade = grade;
    }
    setGrade(grade: number): void {
        this.grade = grade;
    }
    getGrade(): number {
        return this.grade;
    }

}

let map = new MAP(445, 'MAP', 100)
console.log(map);


//Overriding
class Meditator {
    name: string;
    constructor(name: string) { this.name = name }
    
    meditate(duration: number = 20) {
    console.log(this.name + " is meditating for " + duration + " mins!");
    }
}

class Sidha extends Meditator {
    constructor(name: string) {
         super(name) 
        }

    meditate(duration: number = 40) {
    console.log('Meditation started')
        super.meditate(duration);
    }
}
let john = new Sidha("John ");
john.meditate(); // Medit ation started John is medi tating for 40 mins!


let zola = new Meditator('Zola')
zola.meditate();