// import { useState, useEffect } from 'preact/hooks'
// import { requestGraphQL } from 'utils/request'
// import { RequestHookResult } from 'types/hooks'

// export function useGraphQL<TResult>(url: string, query: string, headers?: { [k: string]: string }): RequestHookResult<TResult> {
//   const [result, setResult] = useState<TResult | undefined>(undefined)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     requestGraphQL(url, query, headers).then(json => {
//       setResult(json)
//       setLoading(false)
//     })
//   }, [])

//   return [result, { loading }]
// }
