import { TOGGLE_BLUETOOTH, ACCEPT_DOCTOR, REVOKE_DOCTOR, ACCEPT_PATIENT, REVOKE_PATIENT} from './Types'

export const toggleBluetooth = bluetoothState => (
  {
    type: TOGGLE_BLUETOOTH,
    payload: bluetoothState,
  }
);

export const acceptDoctor = doctorIndex => (
  {
    type: ACCEPT_DOCTOR,
    payload: doctorIndex,
  }
);

export const revokeDoctor = doctorIndex => (
  {
    type: REVOKE_DOCTOR,
    payload: doctorIndex,
  }
);

export const acceptPatient = patientIndex => (
  {
    type: ACCEPT_PATIENT,
    payload: patientIndex,
  }
);

export const revokePatient = patientIndex => (
  {
    type: REVOKE_PATIENT,
    payload: patientIndex,
  }
);