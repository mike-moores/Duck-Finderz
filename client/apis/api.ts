import request from 'superagent'


async function getDuck() {
  const data = await request.get('/api/v1/routes')
  return data.body
}


export { getDuck}
