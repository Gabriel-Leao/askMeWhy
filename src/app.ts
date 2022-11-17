import express from 'express'
import bodyParser from 'body-parser'
import connection from './controllers/connection'
import routes from './routes'
import Ask from './models/Ask'
import Answers from './models/Answer'

const app = express()

try {
  connection
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

// Ask.sync({ force: false })
//   .then(() => console.log('Ask table successful created'))
//   .catch((error: Error) => console.log(error.name))

// Answers.sync({ force: false })
//   .then(() => console.log('Answers table successful created'))
//   .catch((error: Error) => console.log(error.name))

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () =>
  console.log(`listen on port ${process.env.PORT}!`)
)
