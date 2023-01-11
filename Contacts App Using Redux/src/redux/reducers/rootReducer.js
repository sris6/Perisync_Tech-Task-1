import { combineReducers } from 'redux'
import Arraydata from './Arraydata'
import ContactsReducer from './ContactsReducer'

const rootReducer = combineReducers({
    Arraydata,
    ContactsReducer
})

export default rootReducer
