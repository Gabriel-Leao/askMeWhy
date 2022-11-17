import { INTEGER, TEXT } from 'sequelize'
import connection from '../controllers/connection'

const Answers = connection.define('answers', {
  body: {
    type: TEXT,
    allowNull: false,
  },
  questionId: {
    type: INTEGER,
    allowNull: false,
  },
})

export default Answers
