require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? './.env.test' : './.env'
});

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  storage: './__tests__/database.sqlite',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
};
