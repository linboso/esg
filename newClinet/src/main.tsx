import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"

import App from "./App"
import "./index.css"

import { QueryClient, QueryClientProvider } from "react-query"
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  // <link rel="manifest" href="/site.webmanifest">
  // <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  // <meta name="msapplication-TileColor" content="#da532c">
  // <meta name="theme-color" content="#ffffff"></meta>
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
