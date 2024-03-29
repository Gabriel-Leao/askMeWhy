import { Router } from 'express'
import Ask from '../models/Ask'
import Answers from '../models/Answer'

const routes = Router()

interface IAsk {
  id: number
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
}

interface IAnswer {
  id: number
  body: string
  questionId: number
  createdAt: Date
  updatedAt: Date
}

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
  }).then(() => res.redirect('/'))
})

routes.get('/question/:id', (req, res) => {
  const id = req.params.id
  Ask.findOne({
    where: { id },
  }).then((question) => {
    if (question != undefined) {
      Answers.findAll({
        where: { questionId: id },
        order: [['id', 'desc']],
      }).then((answers) => {
        res.render('pages/question', { question, answers })
      })
    } else res.redirect('/')
  })
})

routes.post('/send/answer', (req, res) => {
  const body = req.body.answer
  const questionId = req.body.questionId
  Answers.create({
    body,
    questionId,
  }).then(() => res.redirect(`/question/${questionId}`))
})

export default routes
