import request from 'superagent'

async function getDuck() {
  const data = await request.get('/api/v1/routes')
  return data.body
}

async function getDuckById(id: number) {
  const data = await request.get(`/api/v1/routes/${id}`)
  return data.body
}

export { getDuck, getDuckById }
