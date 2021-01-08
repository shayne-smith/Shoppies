import {
    ADD_NOMINATION,
    REMOVE_BANNER,
    REMOVE_NOMINATION,
    SHOW_BANNER
} from '../actions'

const initialState = {
    showBanner: false,
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
        case SHOW_BANNER:
            return {
                ...state,
                showBanner: true
            }
        case REMOVE_BANNER:
            return {
                ...state,
                showBanner: false
            }
        default:
            return state
    }
}