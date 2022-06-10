import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import Axios from "./FUNCTIONAL_COMPONENT/9-AXIOS/DATA/Axios"
// import Fetch from "./FUNCTIONAL_COMPONENT/9-AXIOS/DATA/Fetch"
let App = () => {
  return (
    <div>
      <Router>
        <Axios/>
        {/* <Fetch/> */}
      </Router>
    </div> 
  )
}
export default App