const initialState = {
  val: 'FOO'
}

const fooReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FOO_SUCCESS':
      return {...action.payload}
  }
  return state || initialState
}
export default fooReducer
