const Pool = require('pg').Pool
const pool = new Pool({
  user: 'alexanderscharpf',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5432,
})

exports.getSpirits = (request, response) => {
  pool.query('SELECT * FROM spirits;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}