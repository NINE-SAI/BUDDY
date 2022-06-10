import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import Data from "./9-AXIOS/1DATA/Data"
let App = () => {
  return (
    <div>
      <Router>
        <Data/>
       
      </Router>
    </div>
  )
}
export default App