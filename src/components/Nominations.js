import React from 'react'
import { connect } from 'react-redux'
import { removeNomination } from '../store/actions'

const Nominations = ({ nominationsList, removeNomination }) => {
    return (
        <div>
            <ul>
                {nominationsList.map((nomination, index) => {
                    return (
                        <li key={index}>{nomination.Title} <button onClick={() => removeNomination(nomination)}>Remove</button></li>
                    )
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        nominationsList: state.nominations.nominationsList
    }
}

export default connect(mapStateToProps, { removeNomination })(Nominations)