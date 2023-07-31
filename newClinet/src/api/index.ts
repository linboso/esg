import makeApi from "../lib/configureAxios"

const api = makeApi(`http://localhost:5099`)

export const postData = <T, U>(data: T) => api.post<U>(`/data`, data)

export const getData = <T>() => api.get<T>(`/chart`)
