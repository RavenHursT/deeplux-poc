import React from 'react'
import Socket from 'simple-websocket'
import ReactDOM from 'react-dom'

const AppRoot = props => <h1>Hello World</h1>
const wrapper = document.getElementById("root")
wrapper ? ReactDOM.render(<AppRoot />, wrapper) : false

const socket = new Socket('ws://localhost:8080')
socket.on('connect', () => {
  console.log('Welp.. that worked')
})

socket.on('data', d => {
  console.log('data => ', d.toString())
})