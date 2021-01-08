import React from 'react'
import { connect } from 'react-redux'
import { addNomination, showBanner } from '../store/actions'

const Results = (props) => {
    const { formValue, resultsList, nominationsList, addNomination, showBanner } = props

    return (
        <div>
            <h2>Results for "{formValue}"</h2>
            <ul>
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
        nominationsList: state.nominations.nominationsList
    }
}

export default connect(mapStateToProps, { addNomination, showBanner })(Results)