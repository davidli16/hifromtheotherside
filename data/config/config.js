module.exports = {
  development: {
    username: 'admin',
    password: 'passpass',
    database: 'hifromtheotherside',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  stage: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'hifromtheotherside',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'hifromtheotherside',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
};
