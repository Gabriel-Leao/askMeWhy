import { Sequelize } from 'sequelize'

export const connection = new Sequelize(
  'askMeWhy',
  'leao',
  'Cabecadequeijo19',
  {
    host: '127.0.0.1',
    dialect: 'mysql',
  }
)
