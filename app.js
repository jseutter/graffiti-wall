import express from 'express'
import {getGraffitis, getGraffiti, createGraffiti } from './database.js'

const app = express()
app.use(express.json())

app.get('/graffitis', async (req, res) => {
    const graffitis = await getGraffitis()
    res.send(graffitis)
})

app.get('/graffitis/:id', async (req, res) => {
    const id = req.params.id
    const graffiti = await getGraffiti(id)
    res.send(graffiti)
})

app.post('/graffitis', async (req, res) => {
    const { title, tag, font } = req.body
    const graffiti = await createGraffiti(title, tag, font)
    res.status(201).send(graffiti)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})