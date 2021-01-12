import { 
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS,
    UPDATE_CURRENT_SEARCH
} from '../actions'

const initialState = {
    isFetching: false,
    resultsList: [],
    currentSearch: ''
}

export const resultsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIES_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                resultsList: action.payload.Search
            }
        case UPDATE_CURRENT_SEARCH:
            return {
                ...state,
                currentSearch: action.payload
            }
        default:
            return state
    }
}