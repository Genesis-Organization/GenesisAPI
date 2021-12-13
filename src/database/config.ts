import config from '@/config/database'

const mongoDB = (): string => {
  return (
    'mongodb://' +
    config.user +
    ':' +
    config.password +
    '@' +
    config.host +
    '/' +
    config.database
  )
}

export default mongoDB
