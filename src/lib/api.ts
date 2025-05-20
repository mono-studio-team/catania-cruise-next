import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_DH_ENDPOINT
const X_API_KEY = process.env.NEXT_PUBLIC_X_API_KEY

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'x-api-key': X_API_KEY,
    Link: '<https://raw.githubusercontent.com/netsensesrl/datahighway-opendata/main/ngsi_ld/context.jsonld>; rel="http://www.w3.org/ns/json-ld#context"; type="application/ld+json"',
  },
})
