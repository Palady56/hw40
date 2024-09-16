import React, { useRef } from 'react';
import "./FormStyle.css"

export default function UncontrolledForm() {

  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Input value is: ${inputRef.current.value}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        "Uncontrolled" Name: 
        <input type="text" ref={inputRef} />
      </label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  )
}