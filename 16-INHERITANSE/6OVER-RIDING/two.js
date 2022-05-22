// NORMAL METHOD OVER-RIDING BY INHERITING IN CONSTRUCTOR BY CLASS

class KA {
    get_Anyayam () {
        console.log("LESS ANYAYAM")
    }
}
class AP extends KA {
    get_Anyayam () {
        console.log("MORE ANYAYAM BY JALAGANNA")
    }
}
let r1 = new AP();
console.log(r1.get_Anyayam());                      // MORE ANYAYAM BY JALAGANNA