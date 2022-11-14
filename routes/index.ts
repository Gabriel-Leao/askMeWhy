import { Router } from 'express'
import Ask from '../models/Ask'

export const routes = Router()

routes.get('/', (req, res) => {
  Ask.findAll({ raw: true, order: [['id', 'desc']] }).then((asks) => {
    res.render('pages/home', { questions: asks })
  })
})

routes.get('/ask', (req, res) => {
  res.render('pages/ask')
})

routes.post('/send/question', (req, res) => {
  const title = req.body.title
  const description = req.body.description
  Ask.create({
    title,
    description,
  }).then(() => {
    res.redirect('/')
  })
})

routes.get('/question/:id', (req, res) => {
  const id = req.params.id
  Ask.findOne({
    where: { id },
  }).then((question) => {
    if (question != undefined) {
      res.render('pages/question', { question })
    } else {
      res.redirect('/')
    }
  })
})
