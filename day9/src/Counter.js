import React, {usestate} from 'react'
const Counter = () =>{
    let [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1);
        console.log(count);
        
    }
    return (
        <div>
            <h1>Counter Application</h1>
            <span></span>
        </div>
    )
}