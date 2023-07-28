import makeApi from "../lib/configureAxios"

const api = makeApi(`localhost:1234`)

export const postData = <T, U>(data: T) => api.post<U>(`/data`, data)

export const getData = <T>() => api.get<T>(`/chart`)
