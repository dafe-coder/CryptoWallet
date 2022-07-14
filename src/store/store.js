import { createStore, combineReducers } from 'redux'
import create from '../reducers/create'
import restore from '../reducers/restore'
import wallet from '../reducers/wallet'

const store = createStore(
	combineReducers({ create, restore, wallet }),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
