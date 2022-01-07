import { expect, describe, request, test, createServer } from '>>/globals'

describe('GET sciences/branchesobj', () => {
  test('should respond with a 200 status code', async () => {
    const app = await createServer()
    const response = await request(app).get('/api/sciences/branchesobj')
    expect(response.statusCode).toBe(200)
  })
  test('should specify json in the content type header', async () => {
    const app = await createServer()
    const response = await request(app).get('/api/sciences/branchesobj')
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('application/json')
    )
  })
  test('should response with a array of group objects', async () => {
    const app = await createServer()
    const response = await request(app).get('/api/sciences/branchesobj')
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          BranchID: expect.any(Number),
          BranchName: expect.any(String),
          Science: expect.objectContaining({
            Group: expect.objectContaining({
              GroupID: expect.any(Number),
              GroupName: expect.any(String),
            }),
            ScienceID: expect.any(Number),
            ScienceName: expect.any(String),
          }),
        }),
      ])
    )
  })
})
