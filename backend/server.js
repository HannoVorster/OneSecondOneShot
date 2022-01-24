import express from 'express'
const app = express()
const port = 5000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('One Second One Shot')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})