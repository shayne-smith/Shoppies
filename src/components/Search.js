import React from 'react'

const Search = (props) => {
    const { value, onChange } = props

    return (
        <form id="searchForm">
            <label htmlFor="searchId" />
            <input
                type="text"
                id="searchId"
                name="Movie title"
                placeholder="Title..."
                onChange={onChange}
                value={value}
            />
        </form>
    )
}

export default Search