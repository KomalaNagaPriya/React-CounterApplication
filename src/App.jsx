import React,{ useState } from 'react'

const App = () => {
    let[count,setCount]=useState(0)
    let inc=()=>setCount(count+1)
    let dec=()=>setCount(count-1)
    let res=()=>setCount(0)
    
    return(
            <div id="main">
            <h1 id="ch1">COUNTER</h1>
            <div id="app">
            <div id="sol"> {count} </div>
            <div id="buttons">
            <button onClick={inc} className='symbols'><i className="fa-solid fa-plus"></i></button>
            <button onClick={res} className='symbols'><i className="fa-solid fa-rotate-right"></i></button>
            <button onClick={dec} className='symbols'><i className="fa-solid fa-minus"></i></button>
            </div>
            
            </div>

        </div>
        )
 
}

export default App


