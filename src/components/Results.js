import React from 'react'
import { connect } from 'react-redux'
import { addNomination } from '../store/actions'

const Results = (props) => {
    const { formValue, resultsList ,addNomination } = props

    return (
        <div>
            <h2>Results for "{formValue}"</h2>
            <ul>
                {resultsList && resultsList.map((movie, index) => (
                    <li key={index} >{movie.Title} ({movie.Year}) <button onClick={() => addNomination(movie)} >Nominate</button></li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        resultsList: state.results.resultsList
    }
}

export default connect(mapStateToProps, { addNomination })(Results)