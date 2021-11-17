import config from '../config/config'

const mongoDB = (): string => {
  return (
    'mongodb://' +
    config.database.user +
    ':' +
    config.database.password +
    '@' +
    config.database.host +
    '/' +
    config.database.database
  )
}

export default mongoDB
