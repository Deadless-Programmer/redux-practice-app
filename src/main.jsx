import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './redux/store'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router.jsx'
import AuthObserver from './components/AuthObserver.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthObserver />
     <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
