import { Sequelize } from 'sequelize'

const connection = new Sequelize(
  'askMeWhy',
  'aguaturbia',
  '6ZAXybvoWgXUhWFhwMWc',
  {
    host: 'ask-project.c8cvzmg6vysb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
  }
)

export default connection
