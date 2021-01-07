import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchMovies } from '../store/actions'

const Search = ({ fetchMovies }) => {
    const [formValue, setFormValue] = useState('')

    useEffect(() => {
        fetchMovies(formValue)
    }, [fetchMovies, formValue])

    const onChange = evt => {
        // evt.preventDefault() // do I need this since I'm not submitting the form???
        
        const value = evt.target.value
        setFormValue(value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
    }

    return (
        <form 
            id="searchForm"
            onSubmit={onSubmit}
        >
            <label htmlFor="searchId" />
            <input
                type="text"
                id="searchId"
                name="Movie title"
                placeholder="Title..."
                onChange={onChange}
                value={formValue}
            />
        </form>
    )
}

export default connect(null, { fetchMovies })(Search)