import { Duck } from '../../../models/Ducks.ts'
import connection from '../connection.ts'

async function getDuck(): Promise<Duck[]> {
  const data = await connection('Ducks').select('*')
  return data as Duck[]
}

async function getDuckById(id: number): Promise<Duck> {
  const data = await connection('Ducks').where('id', id).select('*').first()
  return data as Duck
}

export { getDuck, getDuckById }
