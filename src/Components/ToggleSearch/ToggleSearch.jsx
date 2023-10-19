import React from 'react'
import './ToggleSearch.css'
import {useState} from 'react'
import Input from '../../Components/Input/Input'

function ToggleSearch({onDismiss}) {

    
 
    return (
    <>
    <div className="toggle_menu">
    <h1>hello</h1>
      <button onClick={onDismiss}>X</button>
      
    </div>
    
    </>
  )
}

export default ToggleSearch