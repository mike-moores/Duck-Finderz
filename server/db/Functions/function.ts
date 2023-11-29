import { Duck } from '../../../models/Ducks.ts'
import connection from '../connection.ts'

function getDuck(): Promise<Duck[]> {
  return connection('Ducks')
    .select('*')
    .then((data) => {
      console.log('API Response:', data)
      return data as Duck[]
    })
    .catch((error) => {
      console.error('API Error:', error)
      throw error
    })
}

export {getDuck}