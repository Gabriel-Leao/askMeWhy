import { STRING, TEXT } from 'sequelize'
import connection from '../config/db.config'

const Ask = connection.define('ask', {
  title: {
    type: STRING,
    allowNull: false,
  },

  description: {
    type: TEXT,
    allowNull: false,
  },
})

export default Ask
