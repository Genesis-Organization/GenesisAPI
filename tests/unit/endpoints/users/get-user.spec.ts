import { expect, describe, request, test, createServer } from '>>/globals'

describe('GET user', () => {
  describe('Pass correct query data', () => {
    test('should respond with a 200 status code', async () => {
      const app = await createServer()
      const response = await request(app).get('/api/users/Aard_')
      expect(response.statusCode).toBe(200)
    })

    test('should specify json in the content type header', async () => {
      const app = await createServer()
      const response = await request(app).get('/api/users/Aard_')
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('application/json')
      )
    })

    test('should response with a array of group objects', async () => {
      const app = await createServer()
      const response = await request(app).get('/api/users/test')
      expect(response.body).toEqual(
        expect.objectContaining({
          Name: expect.any(String),
          Surname: expect.any(String),
          Login: expect.any(String),
          Degree: expect.any(String),
          avatarFileID: expect.any(String),
          bannerFileID: expect.any(String),
          isGenesisMember: expect.any(Boolean),
          isProtected: expect.any(Boolean),
          isSponsor: expect.any(Boolean),
          researchInterests: expect.arrayContaining([
            expect.objectContaining({
              science: expect.any(String),
              level: expect.any(String),
            }),
          ]),
          education: expect.arrayContaining([
            expect.objectContaining({
              university: expect.any(String),
              science: expect.any(String),
              degree: expect.any(String),
              time: expect.any(String),
              place: expect.any(String),
            }),
          ]),
          // research: expect.arrayContaining([]),
          // description: expect.any(String),
          // interests: expect.arrayContaining([]),
          // languages: expect.arrayContaining([]),
          // socialMedias: expect.arrayContaining([]),
        })
      )
    })
  })
  describe('Incorrect data', () => {
    test('should respond with a 400 status code', async () => {
      const app = await createServer()
      const response = await request(app).get('/api/users/null')
      console.log(response.body)
      expect(response.statusCode).toBe(400)
    })
  })
})
