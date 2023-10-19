import React from 'react'
import {useState} from 'react'
import ToggleSearch from '../ToggleSearch/ToggleSearch'
function Input() {

  const [result,setResult] = useState(false)
  const handleClick = () =>{
    
    setResult(true)
  }
  
  const handleDismiss = ()=>{
    setResult(false)  
  }
  
  return (
    
    
    <div className="search_bar">
          
       {result===false?<input type="text" placeholder='Search' onClick={handleClick} />:<ToggleSearch onDismiss={handleDismiss} />}
    </div>
    
  )
}

export default Input