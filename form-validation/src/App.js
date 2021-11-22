import './App.css';
import React, { useState, useReducer } from 'react';

const ACTIONS = {
  ADD_OBJ: 'add-object'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_OBJ:
      return [...state, newObj(action.payload.firstName, action.payload.lastName, action.payload.email)]
    default:
        return state
  }
}

function newObj(firstName, lastName, email) {
  return (
    {firstName: firstName, lastName: lastName, email: email}
  )
}

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [state, dispatch] = useReducer(reducer, [])


    const handleSubmit = e => {
      e.preventDefault()

      dispatch( {type: ACTIONS.ADD_OBJ, payload: {firstName: firstName, lastName: lastName, email: email} } )

      setFirstName("")
      setLastName("")
      setEmail("")
    }

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <div className="formInput">
          <label>First Name: </label>
          <input type="text" className="input" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        </div>
        <div className="formInput">
          <label>Last Name: </label>
          <input type="text" className="input" onChange={(e) => setLastName(e.target.value)} value={lastName} />
        </div>
        <div className="formInput">
          <label>Email: </label>
          <input type="text" className="input" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div>
          <button style={{backgroundColor: "skyblue", color: "black", padding: "6px", margin: "5px 0px 5px 5px"}} type="submit" className="submitButton">Submit</button>
        </div>
      </form>

      <div className="displayResults">
      {state.map((form, index) => {
          return (
            <div className="mappedResults" key={index}>
              <p>First Name: {form.firstName}</p>
              <p>Last Name: {form.lastName}</p>
              <p>Email: {form.email}</p>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
