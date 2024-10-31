const { error } = require('console')
const express = require('express')
const app = express()
const fs = require('fs')

const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    fs.readFile('./tasks', 'utf-8', (err, data) => {
        if(err) {
            console.log(err)
            return
        } 
        const tasks = data.split("\n") 
        res.render('index', {tasks: tasks})

    })
})


app.post('/', (req, res) => {
    console.log('form sent data')
    console.log('req body ', req.body.tasks)
    fs.readFile('./tasks','utf8',(err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        const tasks = data.split("\n")

    }) 

}) 
app.listen(3001, () => {
    console.log('Server started at localhost:3001')
})