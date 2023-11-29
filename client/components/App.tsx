import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Ducks from './Allducks'
import LoginPage from './LoginPage'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {/* <header className="header">
          <h1>My Collection</h1>
        </header> */}
        <div>
          <LoginPage />
          {/* <Ducks /> */}
        </div>
        <section className="main">{/* add your code here */}</section>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
