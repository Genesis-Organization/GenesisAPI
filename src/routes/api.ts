import { Router, Request, Response } from 'express'
import db from '../database/mysql'
const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
  const sql = 'SELECT * FROM GROUPS'
  db.query(sql, (err, results)=>{
    if(err) throw err
    console.log(results)
    res.send("You shouldn't be theree" + results)
  })
})

export default router
