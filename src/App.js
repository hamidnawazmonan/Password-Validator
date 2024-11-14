import './App.css';
import React, { useState } from 'react'
import validator from 'validator'

function App() {
  const [errorMessage, setErrorMessage] = useState('')

  const validate =(value)=>{
    if(validator.isStrongPassword(value,{
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumber: 1, minSymbol: 1
    })){
      setErrorMessage('Is Strong Password')
    }
    else{
      setErrorMessage('Is not Strong Password')
    }
  }
  return (
    <div className="App" style={{marginLeft: '200px'}}>
      <pre>
        <h2>Checking Password Strength in React JS</h2>
        <span>Enter Password:</span>
        <input type="text" name="password" id="password" onChange={(e)=>validate(e.target.value)} /><br/>
        {errorMessage === '' ? null: <span style={{fontWeight: 'bold', color: 'red'}}>{errorMessage}</span>}
      </pre>
    </div>
  );
}

export default App;
