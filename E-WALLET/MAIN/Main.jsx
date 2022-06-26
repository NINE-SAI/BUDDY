import React from 'react'
import English from '../ALL_APPS/English'
import Spanish from '../ALL_APPS/Spanish'
import Italian from '../ALL_APPS/Italian'
import German from '../ALL_APPS/German'
import { useState } from 'react'
const Main = () => {
    const [state,setState] = useState({
        1:<English/>,
        2:<Spanish/>,
        3:<Italian/>,
        4:<German/>
    })
    const eventHandler = (event)=>{
        setState({...state,[event.target.name]:event.target.value})
    }
  return (
    <>
    <center className="mt-3">
        <button name='1' onClick={eventHandler} className='btn btn-primary mr-5'>ENGLISH</button>
        <button name='2' onClick={eventHandler} className='btn btn-success mr-5'>SPANISH</button>
        <button name='3' onClick={eventHandler} className='btn btn-secondary mr-5'>ITALIAN</button>
        <button name='4' onClick={eventHandler} className='btn btn-info'>GERMAN</button>
    </center>
    {/* <English/> */}
    </>
  )
}

export default Main