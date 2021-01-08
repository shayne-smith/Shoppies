import React from 'react'
import Search from './components/Search'
import Nominations from './components/Nominations'
import './App.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        The Shoppies
      </header>
      <div>
        <Search />
        <Nominations />
      </div>
    </div>
  )
}

export default App
