import ClassB from "./ClassB"
let FunctionA = ()=>{
     let name="TEJA"
    return(
            <div>
                <h1>FUNCTION-A</h1>
                <ClassB one={"KIRAN"} two={name}/>
            </div>
    )
}
export default FunctionA