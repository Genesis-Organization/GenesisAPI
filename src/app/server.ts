import app from './app'
import config from '@/config/server'
import gqlHTTP from '@/graphql'
import middlewares from '@/middlewares/index'
import serveApi from '@/routes/api'
import serveStatic from '@/routes/static'
// TO FIX
// import passport from 'passport'
// import UserModel from '@/database/models/users/user'
// import { User } from '@/types/users'
// import passportlocal from 'passport-local'
// const LocalStrategy = passportlocal.Strategy
// import bcrypt from 'bcrypt'

const init = async () => {
  app.use(middlewares)

  // TO FIX
  // passport.serializeUser((user: User, done) => {
  //   done(null, user._id)
  // })

  // passport.deserializeUser((id, done) => {
  //   UserModel.findById(id, (err: string, user: User) => {
  //     done(err, user)
  //   })
  // })

  // passport.use(
  //   new LocalStrategy((Login: string, Password: string, done) => {
  //     UserModel.findOne({ Login: Login }, (err: any, user: User) => {
  //       if (err) return done(err)
  //       if (!user) return done(null, false, { message: 'Incorect username' })
  //       bcrypt.compare(Password, user.Password, (err: any, res) => {
  //         if (err) return done(err)
  //         if (res === false)
  //           return done(null, false, { message: 'Incorrect password' })
  //         return done(null, user)
  //       })
  //     })
  //   })
  // )
  // TO FIX

  app.use('/api', serveApi)
  app.use('/graphql', await gqlHTTP())
  app.use(serveStatic)

  await app.listen(config.port)
}

export default init
