import { useQuery } from 'react-query'
import { getDuck } from '../apis/api'

interface Duck {
  id: number
  image: string
  name: string
}

const Ducks = () => {
  const {
    data: Ducks,
    isLoading,
    error,
  } = useQuery<Duck[]>('Ducks', getDuck)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error fetching Ducks: </p>
  }

  return (
    <div>
      <h2>Duck Collection</h2>
      <ul>
        {Ducks ? (
          Ducks.map((Duck: Duck) => (
            <li key={Duck.id}>
              <img src={Duck.image} alt={Duck.name} />
              <p>{Duck.name}</p>
            </li>
          ))
        ) : (
          <p>No Ducks available</p>
        )}
      </ul>
    </div>
  )
}

export default Ducks
