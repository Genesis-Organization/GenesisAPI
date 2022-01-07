import { expect, describe, request, test, createServer } from '>>/globals'

describe('GET sciences/sciencesobj', () => {
  describe('Pass correct query data', () => {
    test('should respond with a 200 status code', async () => {
      const app = await createServer()
      const response = await request(app).get(
        '/api/sciences/fetchsciences?science=Physics&branch=Kinematics'
      )
      expect(response.statusCode).toBe(200)
    })

    test('should specify json in the content type header', async () => {
      const app = await createServer()
      const response = await request(app).get(
        '/api/sciences/fetchsciences?science=Physics&branch=Kinematics'
      )
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('application/json')
      )
    })

    test('should response with a array of group objects', async () => {
      const app = await createServer()
      const response = await request(app).get(
        '/api/sciences/fetchsciences?science=Physics&branch=Kinematics'
      )
      expect(response.body).toEqual(
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
          Subjects: expect.arrayContaining([
            expect.objectContaining({
              Branch: expect.any(Number),
              SubjectID: expect.any(Number),
              SubjectName: expect.any(String),
              Formulas: expect.arrayContaining([
                expect.objectContaining({
                  Subject: expect.any(Number),
                  ID: expect.any(Number),
                  Name: expect.any(String),
                  Content: expect.any(String),
                  Difficulty: expect.any(Number),
                  Unit: expect.any(String),
                  Quantities: expect.arrayContaining([
                    expect.objectContaining({
                      Symbol: expect.any(String),
                      Content: expect.any(String),
                    }),
                  ]),
                }),
              ]),
            }),
          ]),
        })
      )
    })
  })
  describe('Incorrect data', () => {
    test('should respond with a 400 status code', async () => {
      const app = await createServer()
      const response = await request(app).get(
        '/api/sciences/fetchsciences?science=physics&branch=kinematicsssss'
      )
      expect(response.statusCode).toBe(400)
    })
  })
})
