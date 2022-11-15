import express from 'express'
import bodyParser from 'body-parser'
import { connection } from './controllers/connection'
import { routes } from './routes'
import Ask from './models/Ask'
import Answers from './models/Answer'

const app = express()

connection
  .authenticate()
  .then(() => {
    console.log('The connection to the database was successful')
  })
  .catch((error: Error) => {
    console.log(error.name)
  })

Ask.sync({ force: false })
  .then(() => console.log('Ask table successful created'))
  .catch((error: Error) => console.log(error.name))

Answers.sync({ force: false })
  .then(() => console.log('Answers table successful created'))
  .catch((error: Error) => console.log(error.name))

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)

app.listen(3333, () => console.log('listen on port 3333!'))
