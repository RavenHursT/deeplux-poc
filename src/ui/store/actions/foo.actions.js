export const UPDATE_FOO_SUCCESS = 'UPDATE_FOO_SUCCESS'
export const HTTP_METHOD_POST = "post"
export const HTTP_METHOD_DELETE = "delete"
export const HTTP_UTF_8_CHARSET = "charset=UTF-8"
export const HTTP_HEADER_NAME_CONTENT_TYPE = "Content-type"
export const HTTP_CONTENT_TYPE_JSON = "application/json"
export const JSON_HEADERS = {
  [HTTP_HEADER_NAME_CONTENT_TYPE]: `${HTTP_CONTENT_TYPE_JSON}; ${HTTP_UTF_8_CHARSET}`
}

export const updateFoo = () => async (dispatch) => {
  const result = await fetch('http://localhost:8080/foo', {
    headers: JSON_HEADERS
  })
  console.log(`result => `, result)
}