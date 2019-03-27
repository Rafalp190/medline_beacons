import React from 'react';                  // Knows how a component should behave. Knows how to make a bunch of components
// import ReactNative from 'react-native';  // Outputs component to the devices screen, provides default components (images, tables, text, etc)
import { Text, AppRegistry } from 'react-native'         // import destructuring, for importing just specific atributes

// Create component
// A component is a java script function that returns some ammount of JSX
const App = () => (
    // JSX is utilized to communicate to react native
    // https://babeljs.io/repl es una pagina donde muestra como esta creando de JSX -> React de una manera mas eficiente
    <Text>Some Text</Text>
    );
// Because its just returning a text we don't have to make the whole constructor
/* const App = () => {
    return (
      <Text>Some Text</Text>
    );
}; */

// Render to device
AppRegistry.registerComponent('MedLine', () => App) // We have to register at least one component to the aplication
