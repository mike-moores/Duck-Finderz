import express from 'express'
import { getDuck, getDuckById, getCollectionByUserName } from '../db/Functions/function'

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

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    console.log(id)
    const duck = await getDuckById(id)
    res.status(200).json(duck)
  } catch (error) {
    console.error('Error fetching Ducks:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/user/:username', async (req, res) => {
  try {
    const username = String(req.params.username)
    console.log(username)
    const Collection = await getCollectionByUserName(username)
    res.status(200).json(Collection)
  } catch (error) {
    console.error('Error fetching Collection:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
