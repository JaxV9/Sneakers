import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./style/index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <Provider store={store}>
          <App />
       </Provider >
  </React.StrictMode>
)
