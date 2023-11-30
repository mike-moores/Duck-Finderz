import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'
import Ducks from './components/Allducks.tsx'
import LoginPage from './components/LoginPage.tsx'

export const routes = createRoutesFromElements(
  <>
    <Route path="/login" element={<LoginPage />}></Route>
    <Route path="/" element={<AppLayout />} />
    <Route index element={<Ducks />} />
  </>
)
