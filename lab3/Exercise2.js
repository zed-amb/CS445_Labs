"use strict";
/* Re-write the following code using TypeScript.
 Try to be as explicit as possible and add Types to everything you can.
 When you are done, transpile the TS code to JS code and inspect the JS code. */
/*
 let bankAccount = {

    money:number;
    deposit(value:number): void {
        this.money += value;
    } = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
 */
/* let bankAccount: {
    money: number,
    deposit(value: number): void
}
 =
{
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself: {
    name: string,
    bankAccount: typeof bankAccount,
    hobbies: string[]
} = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself); */
class BankAccount {
    constructor(money) {
        this.money = money;
    }
    deposit(value) {
        this.money += value;
    }
}
class Myself {
    constructor(name, bankAccount, hobbies) {
        this.name = name;
        this.bankAccount = bankAccount;
        this.hobbies = hobbies;
    }
}
let bankAccount = new BankAccount(3000);
let myself = new Myself("Zelalem", bankAccount, ["Swimming", "Coding"]);
myself.bankAccount.deposit(3000);
console.log(myself);
