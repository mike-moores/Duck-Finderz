import express from 'express'
import { getDuck} from '../db/Functions/function'


const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const Ducks = await getDuck()
    res.status(200).json(Ducks)
  } catch (error) {
    console.error('Error fetching Ducks:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router