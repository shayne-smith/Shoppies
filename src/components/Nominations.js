import React from 'react'
import { connect } from 'react-redux'
import { removeBanner, removeNomination } from '../store/actions'

const Nominations = ({ nominationsList, removeBanner, removeNomination }) => {

    return (
        <div id='nominations'>
            <h3>Nominations</h3>
            <ul id='nominationsList' >
                {nominationsList.map((nomination, index) => {
                    return (
                        <li key={index}>{nomination.Title} ({nomination.Year}) <button onClick={() => {
                            if (nominationsList.length < 5) {
                                removeNomination(nomination)
                            } else if (nominationsList.length === 5) {
                                removeNomination(nomination)
                                removeBanner()
                            }  
                        }}>Remove</button></li>
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

export default connect(mapStateToProps, { removeBanner, removeNomination })(Nominations)