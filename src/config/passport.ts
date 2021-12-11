import { User } from '@/types/users'
import UserModel from '@/database/models/users/user'
import passportlocal from 'passport-local'
import bcrypt from 'bcrypt'
const LocalStrategy = passportlocal.Strategy

const passportFunc = (passport: any) => {
  passport.use(
    new LocalStrategy({ usernameField: 'Login' }, (Login, Password, done) => {
      UserModel.findOne({ Login: Login })
        .then((user: User) => {
          if (!user) {
            return done(null, false, { message: 'no-user' })
          }
          bcrypt.compare(Password, user.Password, (err, isMatch) => {
            if (err) throw err
            if (isMatch) {
              return done(null, user)
            } else {
              return done(null, false, { message: 'password-incorrect' })
            }
          })
        })
        .catch((err) => {
          console.log(err)
        })
    })
  )
  passport.serializeUser((user: User, done: any) => {
    done(null, user.Login)
  })
}

export default passportFunc
