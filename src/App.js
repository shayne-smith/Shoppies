import React from 'react'
import { connect } from 'react-redux'
import Banner from './components/Banner'
import Search from './components/Search'
import Nominations from './components/Nominations'
import './App.css'

function App({ showBanner }) {

  return (
    <div className="App">
      {showBanner && <Banner />}
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

const mapStateToProps = state => {
  return {
    showBanner: state.nominations.showBanner
  }
}

export default connect(mapStateToProps, null)(App)
