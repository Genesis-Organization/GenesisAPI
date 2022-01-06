import request from 'supertest'
import createServer from '../server'

describe('GET sciences/groups', () => {
  it('should respond with a 200 status code', async () => {
    const app = await createServer()
    const response = await request(app).get('/api/sciences/groups')
    expect(response.statusCode).toBe(200)
  })
})
