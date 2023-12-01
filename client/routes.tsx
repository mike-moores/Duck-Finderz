import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'
import Ducks from './components/Allducks.tsx'
import LoginPage from './components/LoginPage.tsx'
import App from './components/App.tsx'
import SingleDuck from './components/SingleDuck.tsx'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<App />} />
      <Route path="/:id" element={<SingleDuck />} />
    </Route>
    <Route path="/login" element={<LoginPage />} />
  </>
)
