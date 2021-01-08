import { combineReducers } from 'redux'
import { nominationsReducer as nominations } from './nominationsReducer'
import { resultsReducer as results } from './resultsReducer'

export default combineReducers({
    results,
    nominations
})

