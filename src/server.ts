import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import connection from './config/db.config'

const app = express()
const port = process.env.PORT || 4210

try {
  connection
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)

app.listen(port, () => console.log(`listen on port ${port}!`))
