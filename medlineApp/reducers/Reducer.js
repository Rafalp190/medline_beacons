import { combineReducers } from 'redux'
import { TOGGLE_BLUETOOTH } from '../actions/Types'

const INITIAL_STATE = {
  toggle: false,
  history: {},
}

const bluetoothReducer = (state = INITIAL_STATE, action) => {
  switch( action.type) {
    case TOGGLE_BLUETOOTH:
      const toggle = !(action.payload)
      const newState = {
        ...state,
         toggle 
        }
      return newState

    default:
      return state
  }
}


export default combineReducers({
  bluetooth: bluetoothReducer
})