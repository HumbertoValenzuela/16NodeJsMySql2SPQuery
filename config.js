module.exports = {
  database: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'hvg',
    database: process.env.DB_DATABASE || 'hvgdevelopment',
    multipleStatements: true
  }
}