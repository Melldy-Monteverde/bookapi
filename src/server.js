require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const indexRouter = require('./routes/indexRouter')
const booksRouter = require('./routes/booksRouter')

const app = express()
const PORT = process.env.PORT || 3001
const API_PREFIX = 'api'

app.use(cors())
app.use(express.json())

// app.use(express.static('public', { extensions: ["html", "css", "js"] }))
app.use(express.static(path.join(__dirname, './public')))

app.use(`/${API_PREFIX}`, indexRouter)
app.use(`/${API_PREFIX}/books`, booksRouter)

app.listen(PORT, () => console.log(`___SERVER LISTEN ON___ http://localhost:${PORT}`))
