
import Ducks from './Allducks'
import Nav from './Nav'
import {IfAuthenticated,IfNotAuthenticated} from './Authenticated'
import LoginPage from './LoginPage'


function App() {
 // const navigate = useNavigate()
 // const isAuth = true

  return (
    <div>
      <IfNotAuthenticated>
        <LoginPage/>
        </IfNotAuthenticated>
      <div>
        <IfAuthenticated>
        <Ducks />
        <Nav />

        </IfAuthenticated>
      </div>
    </div>
  )
}

export default App
