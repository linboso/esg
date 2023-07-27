import makeApi from "../lib/configureAxios"

// const api = makeApi(`${process.env.API_BASE_URL ?? "localhost:1234"}`)
const api = makeApi(`localhost:1234`)

export const postData = <T, U>(data: T) => api.post<U>(`/data`, data)
