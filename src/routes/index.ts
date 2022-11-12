import { Router } from 'express'

export const routes = Router()

routes.get('/', (req, res) => {
  res.render('pages/home')
})

routes.get('/ask', (req, res) => {
  res.render('pages/ask')
})

routes.post('/send/question', (req, res) => {
  const title = req.body.title
  const description = req.body.description
  res.send(`título: ${title} descrição: ${description}`)
})
