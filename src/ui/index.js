import React from 'react'
import ReactDOM from 'react-dom'

const AppRoot = props => <h1>Hello World</h1>
console.log('dirka')
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<AppRoot />, wrapper) : false;