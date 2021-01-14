import {
    ADD_NOMINATION,
    REMOVE_BANNER,
    REMOVE_NOMINATION,
    SHOW_BANNER
} from '../actions'

const initialState = {
    showBanner: false,
    nominationsList: [],
    imdbList: []
}

export const nominationsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NOMINATION:
            return {
                ...state,
                nominationsList: [...state.nominationsList, action.payload],
                imdbList: [...state.imdbList, action.payload.imdbID]
            }
        case REMOVE_NOMINATION:
            const updatedNominations = state.nominationsList.filter(nomination => {
                return nomination !== action.payload
            })
            const updatedImdbList = state.imdbList.filter(id => {
                return id !== action.payload.imdbID
            })
            return {
                ...state,
                nominationsList: updatedNominations,
                imdbList: updatedImdbList
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