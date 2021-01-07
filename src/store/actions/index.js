import axios from 'axios'

// export constants to reduce syntax errors
export const FETCH_MOVIES_START = 'FETCH_MOVIES_START'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'

// local constants
const URL = 'http://www.omdbapi.com/?'
const API_KEY = process.env.REACT_APP_OMDB_API_KEY

// make an async request
// redux-thunk allows us to return functions insteads of objects
export const fetchMovies = (formValue) => { 

    return dispatch => {
        dispatch({ type: FETCH_MOVIES_START })

        axios
            .get(URL + 's=' + formValue + '&apikey=' + API_KEY)
            .then(res => {
                dispatch({ type: FETCH_MOVIES_SUCCESS })
            })
            .catch(err => console.log(err))
    }
}

