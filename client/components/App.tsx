import Ducks from './Allducks'
import Nav from './Nav'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import LoginPage from './LoginPage'
import { Flex } from '@chakra-ui/react'

function App() {
  // const navigate = useNavigate()
  // const isAuth = true

  return (
    <div>
      <IfNotAuthenticated>
        <LoginPage />
      </IfNotAuthenticated>
      <div>
        <IfAuthenticated>
          <Ducks />
        </IfAuthenticated>
      </div>
    </div>
  )
}

export default App
