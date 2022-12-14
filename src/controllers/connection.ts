import { Sequelize } from 'sequelize'
import 'dotenv/config'

const connection = new Sequelize(
  process.env.DB_NAME ? process.env.DB_NAME : '',
  process.env.DB_USER ? process.env.DB_USER : '',
  process.env.DB_PASS,
  {
    host: process.env.DB_URI,
    dialect: 'mysql',
  }
)

export default connection
