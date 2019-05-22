import { combineReducers } from 'redux'
import { TOGGLE_BLUETOOTH, ACCEPT_DOCTOR, REVOKE_DOCTOR, ACCEPT_PATIENT, REVOKE_PATIENT } from '../actions/Types'

const INITIAL_STATE = {
  toggle: true,
  nearbyDoctors:
    [
      {
        name: 'Carlos Francisco Paiz',
        
      }
    ],
  myDoctors: 
    [
      {
      name: 'Benjamin House',
      }
    ],
  nearbyPatients: [
    {
      name: 'Gloria Valdez',
      token: '0d248265d1759c7190bebbebe13597eb0730409b'
    },
    {
      name: 'Erick Armando Paredes',
      token: '94908ff2f65ea55c31e4e59e57fd8461c9bf15c8'
    },
    {
      name: 'Vladimir Perez',
      token: '1cab24769011a44af4f277505dae8f36efa48e6e'
    }
  ],
  myPatients: []
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

const doctorInteractionReducer = (state = INITIAL_STATE, action) => {
  const { 
    nearbyDoctors,
    myDoctors
  } = state
  
  switch( action.type ) {
    case ACCEPT_DOCTOR:

      const acceptedDoctor = nearbyDoctors.splice(action.payload, 1)
      myDoctors.push(acceptedDoctor[0])


      const newState = {
        ...state,
        nearbyDoctors,
        myDoctors
      }
      return newState

    case REVOKE_DOCTOR:
      const revokedDoctor = myDoctors.splice(action.payload, 1)
    
      nearbyDoctors.push(revokedDoctor[0])


      const updatedState = {
        ...state,
        nearbyDoctors,
        myDoctors
      }
      return updatedState

    default:
      return state

  }
}

const patientInteractionReducer = (state = INITIAL_STATE, action) => {
  const { 
    nearbyPatients,
    myPatients
  } = state
  
  switch( action.type ) {
    case ACCEPT_PATIENT:

      const acceptedPatient = nearbyPatients.splice(action.payload, 1)
      myPatients.push(acceptedPatient[0])


      const newState = {
        ...state,
        nearbyPatients,
        myPatients
      }
      return newState

    case REVOKE_PATIENT:
      const revokedPatient = myPatients.splice(action.payload, 1)
    
      nearbyPatients.push(revokedPatient[0])


      const updatedState = {
        ...state,
        nearbyPatients,
        myPatients
      }
      return updatedState

    default:
      return state

  }
}


export default combineReducers({
  bluetooth: bluetoothReducer,
  doctors: doctorInteractionReducer,
  patients: patientInteractionReducer,
})