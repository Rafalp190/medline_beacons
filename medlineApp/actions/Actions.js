import { TOGGLE_BLUETOOTH } from './Types'

export const toggleBluetooth = bluetoothState => (
  {
    type: TOGGLE_BLUETOOTH,
    payload: bluetoothState,
  }
);