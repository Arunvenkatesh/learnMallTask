import React, { Component } from 'react';
import AppContainer from "./src/Routes";

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
GLOBAL.FormData = GLOBAL.originalFormData
  ? GLOBAL.originalFormData
  : GLOBAL.FormData;

console.disableYellowBox = true;


export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}


