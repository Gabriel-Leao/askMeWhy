import express from 'express'
import { routes } from './routes/index'

const app = express()

app.set('view engine', 'ejs')
app.use(routes)
app.listen(3333, () => console.log('listen on port 3333!'))
