import React, { useState } from 'react';
import "./FormStyle.css"

export default function ControlledForm() {

  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Input value is: ${inputValue}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        "Controlled" Name: 
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  )
}