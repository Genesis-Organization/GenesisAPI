import { expect, describe, request, test, createServer } from '>>/globals'

describe('GET sciences/sciencesobj', () => {
  test('should respond with a 200 status code', async () => {
    const app = await createServer()
    const response = await request(app).get('/api/sciences/sciencesobj')
    expect(response.statusCode).toBe(200)
  })
  test('should specify json in the content type header', async () => {
    const app = await createServer()
    const response = await request(app).get('/api/sciences/sciencesobj')
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('application/json')
    )
  })
  test('should response with a array of group objects', async () => {
    const app = await createServer()
    const response = await request(app).get('/api/sciences/sciencesobj')
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          Group: expect.objectContaining({
            GroupID: expect.any(Number),
            GroupName: expect.any(String),
          }),
          ScienceID: expect.any(Number),
          ScienceName: expect.any(String),
        }),
      ])
    )
  })
})
