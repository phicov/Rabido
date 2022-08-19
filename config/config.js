require('dotenv').config()
module.exports = {
  development: {
    database: 'rabido_dev',
    dialect: 'postgres'
  },
  test: {
    database: 'rabido_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
