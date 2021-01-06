import React, { useState } from 'react'
import Search from './components/Search'
import './App.css'

import axios from 'axios'
import * as yup from 'yup'

const URL = 'http://www.omdbapi.com/?apikey='
const API_KEY = process.env.REACT_APP_OMDB_API_KEY

function App() {
  const [formValue, setFormValue] = useState()

  const onChange = evt => {
    evt.preventDefault()
    const value = evt.target.value

    setFormValue(value)
  }

  // const onSubmit = evt => {
  //   evt.preventDefault()

  //   // const ne
  // }

  return (
    <div className="App">
      <header className="App-header">
        Hello
      </header>
      <body>
        <Search 
          values={formValue}
          onChange={onChange}
        />
      </body>
    </div>
  )
}

export default App
