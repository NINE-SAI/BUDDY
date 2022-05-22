// WITHOUT USING INHERITANCE SUPER KEYWORD ALSO WE CAN EXECUTES PARENT AND CHILD CLASS

class Account {
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
}
class Address {
    constructor(village,city){
        this.village=village;
        this.city=city;
    }
}
let r1 = new Address("PALLAVOLU","KADAPA", new Account(101,"9SAI"));
console.log(r1);


////////////////////////////////NEED_MORE_PRACTICE/////////////////////////////