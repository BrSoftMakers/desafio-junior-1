// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

module.exports = {
  development: {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    dialectOptions: {
      ssl: process.env.DATABASE_ENABLE_SSL === 'true' ? true : false,
    },
  },
  test: {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    dialectOptions: {
      ssl: process.env.DATABASE_ENABLE_SSL === 'true' ? true : false,
    },
  },
  production: {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    dialectOptions: {
      ssl: process.env.DATABASE_ENABLE_SSL === 'true' ? true : false,
    },
  },
}
