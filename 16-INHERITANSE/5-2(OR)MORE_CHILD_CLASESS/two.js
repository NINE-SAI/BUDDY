// // BY USING 2 (OR) MORE CHILD CLASESS

class Account {
    constructor (id,name) {
        this.id=id;
        this.name=name;
    }
}
class Savings_Account extends Account {
    min_Balance=1000;
    constructor (id,name,balance) {
        super (id,name);
        this.balance=balance;
    }
}
class Current_Account extends Account {
    min_Balance=500;
    constructor (id,name,balance) {
        super (id,name);
        this.balance=balance;
    }
}
let r1 = new Savings_Account(101,"9SAI",45000);
let r2 = new Current_Account(102,"ANIL",40000);
console.log(r1);
console.log(r2);
                                                        /*Savings_Account {
                                                            id: 101,
                                                            name: '9SAI',
                                                            min_Balance: 1000,
                                                            balance: 45000
                                                        }
                                                        Current_Account {
                                                            id: 102,
                                                            name: 'ANIL',
                                                            min_Balance: 500,
                                                            balance: 40000
                                                        }*/