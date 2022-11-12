import express from 'express'
import { routes } from './routes/index'
import bodyParser from 'body-parser'

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)

app.listen(3333, () => console.log('listen on port 3333!'))
