import React, { useEffect, useState } from 'react'

const Form = () => {
    const [phone,setPhone] = useState({
        name:"",
        email:"",
        number:""
    })
    const [store,setStore] = useState([])
    const [formerror,setFormerror] = useState({})
    const [submit,setSubmit] = useState(false)

    const updateHandler = (event)=>{
        setPhone({...phone,[event.target.name]:event.target.value})
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        setFormerror(validate(phone))
        setSubmit(true)
    }
    const deleteHandler = (indexvalue)=>{
        const filtredstore = store.filter((element,index)=>index !== indexvalue)
        setStore(filtredstore)
    }

    useEffect(()=>{
        if((Object.keys(formerror).length===0 && submit)){
            const newStore = [...store,phone]
            setStore(newStore)
        }
    },[formerror])
    const validate = (values)=>{
        const errors={}
        setFormerror(errors)
        const OnlyStrings = /^[a-zA-z]*$/
        if(!values.name){
            errors.name="PLEASE ENTER NAME"
        }
        else if(!values.name.match(OnlyStrings)){
            errors.name="NAME SHOULD BE IN ALPHABETS"
        }
        if(!values.email){
            errors.email="PLEASE ENTER THE EMAIL ID"
        }
        if(!values.number){
            errors.number="PLEASE ENTER TEN DIGITS MOBILE NUMBER"
        }
        else if(values.number.length<10){
            errors.number="MOBILE NUMBER NOT LESSTHAN TEN DIHITS"
        }
        else if(values.number.length>10){
            errors.number="MOBILE NUMBER NOT GREATERTHAN TEN DIGITS"
        }
        return(errors)
    }

  return (
    <div>
        <nav className='navbar navbar-dark bg-dark'>
            <a href="/home" className='navbar-brand'>REGESTRATION FORM</a>
        </nav>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <form onSubmit={submitHandler}>
                            <div className="card-header bg-dark text-white">
                                <div className='form-group'>
                                    <input type="text" placeholder='ENTER NAME' className='form-control' name="name" onChange={updateHandler}/>
                                    <span>{formerror.name}</span>
                                </div>
                                <div className='form-group'>
                                    <input type="email" placeholder='ENTER EMAIL ID' className='form-control' name="email" onChange={updateHandler}/>
                                    <span>{formerror.email}</span>
                                </div>
                                <div className="form-group">
                                    <input type="number" placeholder='ENTER TEN DIGITS MOBILE NUMBER' className='form-control' name="number" onChange={updateHandler}/>
                                    <span>{formerror.number}</span>
                                </div>
                                <div>
                                    <input type="submit" value="SUBMIT" className='btn btn-success'/>
                                </div>
                            </div>
                        </form>
                            <table className='table table-hover'>
                                <thead className='bg-dark text-white'>
                                    <tr>
                                        <th>NAME</th>
                                        <th>EMAIL ID</th>
                                        <th>NUMBER</th>
                                        <th>DELETE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        store.map((event,index)=>{
                                            return <tr key={index}>
                                                <td>{event.name}</td>
                                                <td>{event.email}</td>
                                                <td>{event.number}</td>
                                                <td>
                                                    <input type="submit" value="DELETE" className='btn btn-danger' onClick={()=>deleteHandler(index)}/>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form
