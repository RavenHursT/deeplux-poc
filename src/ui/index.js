import React from 'react'
import Socket from 'simple-websocket'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import store from './store'
import { updateFoo } from './store/actions/foo.actions'

const App = ({foo, dispatchUpdateFoo}) => <div className="app">
  <h1>Hello { 'Cruel' } World</h1>
  <h3>Current Foo value => {foo.val}</h3>
  <button{...{
    onClick: dispatchUpdateFoo
  }}>Update Foo</button>
</div>

const ConnectedApp = connect(
    ({foo}) => ({foo}),
    dispatch => ({
        dispatchUpdateFoo: () => dispatch(updateFoo())
    })
)(App)

const AppRoot = props => <Provider store={store}>
    <ConnectedApp />
</Provider>


ReactDOM.render(<AppRoot />, document.getElementById("root"))

const socket = new Socket('ws://localhost:8080')
socket.on('connect', () => {
  console.log('Welp.. that worked')
})

socket.on('data', d => {
  console.log('data => ', d.toString())
})