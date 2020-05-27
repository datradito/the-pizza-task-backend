const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const menuRouter = require('./routers/menu')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(menuRouter)

module.exports = app