import React from 'react'
import { connect } from 'react-redux'
import Banner from './components/Banner'
import Search from './components/Search'
import Nominations from './components/Nominations'
import './App.css'
import Results from './components/Results'

function App({ showBanner }) {

  return (
    <div className="app">
      {showBanner && <Banner />}
      <header className="app-header">
        <h1>The Shoppies</h1>
      </header>
      <div className='container'>
        <Search />
        <div className='resultsContainer'>
          <Results /> 
          <Nominations />
        </div>
        
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    showBanner: state.nominations.showBanner
  }
}

export default connect(mapStateToProps, null)(App)
