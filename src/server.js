import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

// middlewares that are used for all app
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const router = express.Router()
app.use('api/', router)

// middlewares this one to a specific controller
const log = (request, response, next) => {
    console.log('logging')
    next()
}
//

router.get('/lol', (request, response) => {
    response.send({ message: 'hello world' })
})

app.get('/dlsa', log, (request, response) => {
    response.send({ message: 'hello' })
})

app.post('/', (request, response) => {
    console.log(request.body)
    response.send({ message: 'ok' })
})

export const start = () => {
    app.listen(4000, () => {
        console.log('server is on port 4000')
    })
}
