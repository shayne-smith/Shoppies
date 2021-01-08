import axios from 'axios'

// export constants to reduce syntax errors
export const FETCH_MOVIES_START = 'FETCH_MOVIES_START'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'

export const ADD_NOMINATION = 'ADD_NOMINATION'
export const REMOVE_NOMINATION = 'REMOVE_NOMINATION'

export const SHOW_BANNER = 'SHOW_BANNER'
export const REMOVE_BANNER = 'REMOVE_BANNER'

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
                console.log(res.data)
                dispatch({ type: FETCH_MOVIES_SUCCESS, payload: res.data })
            })
            .catch(err => console.log(err))
    }
}

export const addNomination = (nomination) => {
    return dispatch => {
        dispatch({ type: ADD_NOMINATION, payload: nomination })
    }
}

export const removeNomination = (nomination) => {
    return dispatch => {
        dispatch({ type: REMOVE_NOMINATION, payload: nomination })
    }
}

export const showBanner = () => {
    return dispatch => {
        dispatch({ type: SHOW_BANNER })
    }
}

export const removeBanner = () => {
    return dispatch => {
        dispatch({ type: REMOVE_BANNER })
    }
}

