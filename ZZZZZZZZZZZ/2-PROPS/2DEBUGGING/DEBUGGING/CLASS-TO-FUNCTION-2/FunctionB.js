let FunctionB = (props)=>{
    return(
        <div>
            <h1>FUNCTION-B</h1>
            <pre>{JSON.stringify(props)}</pre>
            <h1>
                NAME :{props.one}
                <hr/>
                NAME :{props.two}
            </h1>
        </div>
    )
}
export default FunctionB