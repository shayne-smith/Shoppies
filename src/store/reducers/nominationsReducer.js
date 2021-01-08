import {
    ADD_NOMINATION,
    REMOVE_NOMINATION
} from '../actions'

const initialState = {
    nominationsList: []
}

export const nominationsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NOMINATION:
            return {
                ...state,
                nominationsList: [...state.nominationsList, action.payload]
            }
        case REMOVE_NOMINATION:
            const updatedNominations = state.nominationsList.filter(nomination => {
                return nomination !== action.payload
            })
            return {
                ...state,
                nominationsList: updatedNominations
            }
        default:
            return state
    }
}