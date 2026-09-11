import React from "react";
import ChildComponent from '/ ChildComponent'
const App = () =>{
    const user = {
        name:"Gaurav",
        email:"enggaurav.eg@gmail.com",
        saction:'cse18'
    }
    return(
  <div>

    <ChildComponent user={user}/>
  </div>
)
}
export default App
