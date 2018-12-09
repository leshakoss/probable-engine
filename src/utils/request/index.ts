const builtinFetch = window.fetch

interface RequestOptions {
  method?: 'GET' | 'POST'
  data?: any
  headers?: { [key: string]: string }
}

interface BuiltInFetchOptions extends RequestOptions {
  mode?: RequestMode
  body?: string
}

export function request(url: string, options: RequestOptions = {}) {
  const { method = 'GET', data, headers = {} } = options
  const _headers = Object.assign({}, headers)

  let fetchOptions: BuiltInFetchOptions = { mode: 'cors' }

  if (data) {
    if (method === 'GET') {
      // TODO: Enable qs when GET with data will be required.
      // url += `?${qs.stringify(data, {arrayFormat: 'brackets'})}`
    } else {
      fetchOptions = { ...fetchOptions, body: JSON.stringify(data) }
      Object.assign(_headers, { 'Content-Type': 'application/json' })
    }
  }

  return builtinFetch(url, {
    ...fetchOptions,
    method,
    headers: new Headers(_headers)
  }).then(resp => {
    const { status } = resp

    if (status === 500) {
      // TODO: Process 500 when it will be required.
    }

    if (status >= 400) {
      // TODO: Process 4xx when it will be required.
    }

    return resp
  })
}

export function requestJSON(url: string, options: RequestOptions = {}) {
  const headers = Object.assign({}, options.headers || {}, {
    Accept: 'application/json'
  })
  return request(
    url,
    Object.assign({}, Object.assign({}, options, { headers }))
  ).then(resp => resp.json())
}

export function getJSON(url: string, options: RequestOptions = {}) {
  return requestJSON(url, Object.assign({}, options, { method: 'GET' }))
}
