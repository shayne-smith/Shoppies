import React from 'react'
import { connect } from 'react-redux'
import { addNomination, showBanner } from '../store/actions'

const Movie = ({ nominationsList, imdbList, addNomination, movie, key, showBanner }) => {

    const checkMovie = (imdbID) => {
        if (imdbList.length !== 0) {
            return imdbList.includes(imdbID)
        }
        return false
    }

    return (
        <li key={key} >{movie.Title} ({movie.Year}) <button onClick={() => {
            if (nominationsList.length < 4) {
                addNomination(movie)
            } else if (nominationsList.length === 4) {
                addNomination(movie)
                showBanner()
            } else if (nominationsList.length === 5) {
                showBanner()
            }
        }} disabled={checkMovie(movie.imdbID)}>Nominate</button></li>
    )
}

const mapStateToProps = state => {
    return {
        nominationsList: state.nominations.nominationsList,
        imdbList: state.nominations.imdbList
    }
}

export default connect(mapStateToProps, { addNomination, showBanner })(Movie)