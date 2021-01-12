import React from 'react'
import { connect } from 'react-redux'
import { addNomination, showBanner } from '../store/actions'

const Results = (props) => {
    const { currentSearch, resultsList, nominationsList, addNomination, showBanner } = props

    return (
        <div id='results' className='shadow'>
            <h3>Results for "{currentSearch}"</h3>
            <ul id='resultsList' >
                {resultsList && resultsList.map((movie, index) => (
                    <li key={index} >{movie.Title} ({movie.Year}) <button onClick={() => {
                        if (nominationsList.length < 4) {
                            addNomination(movie)
                        } else if (nominationsList.length === 4) {
                            addNomination(movie)
                            showBanner()
                        }
                    }} disabled={nominationsList.includes(movie)}>Nominate</button></li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        resultsList: state.results.resultsList,
        currentSearch: state.results.currentSearch,
        nominationsList: state.nominations.nominationsList
    }
}

export default connect(mapStateToProps, { addNomination, showBanner })(Results)