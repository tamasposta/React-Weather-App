import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { LocationProvider } from './context/LocationContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <LocationProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LocationProvider>,
)
