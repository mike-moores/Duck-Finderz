import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'
import Ducks from './components/Allducks.tsx'
import LoginPage from './components/LoginPage.tsx'
import App from './components/App.tsx'

export const routes = createRoutesFromElements(
  <>
    <Route path="/login" element={<LoginPage />}></Route>
    <Route path="/nav" element={<AppLayout />} />
    <Route index element={<App />} />
    <Route path='/ducks' element={<Ducks />} />
  </>
)

