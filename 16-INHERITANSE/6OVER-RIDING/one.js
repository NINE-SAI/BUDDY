// PROPERTY OVER-RIDING BY INHERITING IN CONSTRUCTOR BY CLASS

class KA {
    tax=30;
}
class AP extends KA {
    tax=50;
}
let r1 = new AP ();
console.log(r1);                                    // AP { tax: 50 }
console.log(r1.tax)                                 // 50