import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { SearchOutlined } from '@ant-design/icons'

import { fetchMovies, updateCurrentSearch } from '../store/actions'

const Search = ({ fetchMovies, updateCurrentSearch }) => {
    const [formValue, setFormValue] = useState('')

    useEffect(() => {
        fetchMovies(formValue)
    }, [fetchMovies, formValue])

    const onChange = evt => {
        const value = evt.target.value
        setFormValue(value)
        updateCurrentSearch(value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
    }

    return (
        <div id='searchContainer'>
            <h3>Movie Title</h3>
           <form 
                id="searchForm"
                onSubmit={onSubmit}
            >
                <div className='search'>
                    <SearchOutlined className='fa-search' />
                    <input
                        type="text"
                        id="searchBar"
                        name="Movie title"
                        placeholder="Title..."
                        onChange={onChange}
                        value={formValue}
                    />
                </div>
            </form>
        </div>   
    )
}

export default connect(null, { fetchMovies, updateCurrentSearch })(Search)