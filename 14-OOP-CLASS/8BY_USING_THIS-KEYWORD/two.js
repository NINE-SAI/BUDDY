// BY USING THIS KEYWORD AND STRING LITERAL EXECUTING THE PROPERTY BY METHOD

class Employees {
    name = "ANIL" ;
    get_Details () {
        console.log ("9SAI")
        console.log( `NAME: ${this.name}` )
    }
}
let r1 = new Employees ()
r1.get_Details()                                        // 9SAI
                                                        // NAME: ANIL