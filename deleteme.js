const express = require('express')
const app = express()
const port = 3000
require('isomorphic-fetch')

const OPEN_COLLECTIVE_API_KEY = '70e0c18a8bccbb4e2a80545931fe1c746061905d'
const SPONSORS_URL = 'https://api.opencollective.com/graphql/v2'
const query =
`
query {
  account (slug: "date-fns") {
    orders (limit: 1000) {
      totalCount
      nodes {
        fromAccount {
          name
          imageUrl
          slug
        }
        createdAt
        updatedAt
        status
        amount {
          value
        }
        totalDonations {
          value
        }
        tier {
          slug
        }
      }
    }
  }
}
`

async function request(url, options = {}) {
  const { method = 'GET', data, headers: defaultHeaders = {} } = options

  let headers = defaultHeaders
  let fetchOptions = { mode: 'cors' }

  if (data) {
    if (method === 'GET') {
      // TODO: Enable qs when GET with data will be required.
      // url += `?${qs.stringify(data, {arrayFormat: 'brackets'})}`
    } else {
      fetchOptions = { ...fetchOptions, body: JSON.stringify(data) }
      headers = { ...headers, 'Content-Type': 'application/json' }
    }
  }

  console.log({fetchOptions})

  const response = await fetch(url, {
    ...fetchOptions,
    method,
    headers: new Headers(headers)
  })

  const { status } = response

  if (status === 500) {
    // TODO: Process 500 when it will be required.
  }

  if (status >= 400 && status < 500) {
    // TODO: Process 4xx when it will be required.
  }

  return response
}

async function requestJSON(url, options = {}) {
  const headers = Object.assign({}, options.headers || {}, {
    Accept: 'application/json'
  })

  const response = await request(
    url,
    { ...options, headers }
  )

  console.log({response})

  return response.json()
}

function requestGraphQL(url, query, headers) {
  console.log(query)
  return requestJSON(url, { method: 'POST', data: { query }, headers})
}

app.use(require('body-parser').json())

app.get('/api/sponsors', (req, res) => {
  requestGraphQL(SPONSORS_URL, query, { 'Api-Key': OPEN_COLLECTIVE_API_KEY }).then(json => {
    console.log({json})
    res.send(json)
  }).catch(wtf => console.log({wtf}))
})

app.get('*', (req, res) => {
  // const body = render(<ServerUI url={context.url} />)

  // context.body = template({
  //   body,
  //   entry: '/static/script.js'
  // })
  // context.body = 'wtf'
  res.send('wtf')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
