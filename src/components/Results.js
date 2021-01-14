import React from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'

const Results = (props) => {
    const { currentSearch, resultsList } = props

    return (
        <div id='results' className='shadow'>
            <h3>Results for "{currentSearch}"</h3>
            <ul id='resultsList' >
                {resultsList && resultsList.map((movie, index) => (
                    <Movie movie={movie} key={index} />
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        resultsList: state.results.resultsList,
        currentSearch: state.results.currentSearch
    }
}

export default connect(mapStateToProps, null)(Results)