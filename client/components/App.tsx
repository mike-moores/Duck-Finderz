import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Ducks from './Allducks'
import LoginPage from './LoginPage'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const queryClient = new QueryClient()

function App() {
  const navigate = useNavigate()
  const isAuth = true

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth, navigate])

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {/* <header className="header">
          <h1>My Collection</h1>
        </header> */}
        <div>
          <Ducks />
          {/* <Ducks /> */}
        </div>
        <section className="main">{/* add your code here */}</section>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
