import { 
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS
} from '../actions'

const initialState = {
    isFetching: false,
    results: []
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
                results: [...state.results, action.payload]
            }
        default:
            return state
    }
}