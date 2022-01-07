import { expect, describe, request, test, createServer } from '>>/globals'

describe('GET sciences/groups', () => {
  test('should respond with a 200 status code', async () => {
    const app = await createServer()
    const response = await request(app).get('/api/sciences/groups')
    expect(response.statusCode).toBe(200)
  })
  test('should specify json in the content type header', async () => {
    const app = await createServer()
    const response = await request(app).get('/api/sciences/groups')
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('application/json')
    )
  })
  test('should response with a array of group objects', async () => {
    const app = await createServer()
    const response = await request(app).get('/api/sciences/groups')
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          GroupID: expect.any(Number),
          GroupName: expect.any(String),
        }),
      ])
    )
  })
})
