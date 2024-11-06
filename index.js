const { error } = require('console')
const express = require('express')
const app = express()
const fs = require('fs')

const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))

const readFile = (filename) =>{ 
    return new Promise((resolve, reject) =>{
        fs.readFile('./tasks', 'utf-8', (err, data) => {
            if(err) {
                console.log(err)
                return
            } 
            const tasks = data.split("\n") 
            resolve(tasks)
        })
    })
}

app.get('/', (req, res) => {
    fs.readFile('./tasks', 'utf-8', (err, data) => {
        if(err) {
            console.log(err)
            return
        } 
        const tasks = data.split("\n") 
        res.render('index', {tasks: tasks})
        console.log(tasks)

    })
})


app.post('/', (req, res) => {
    readFile('./tasks')
        .then(tasks => {
            tasks.push(req.body.task)
            const data = tasks.join("\n")
            console.log(data)
            fs.writeFile('./tasks', data, err => { 
                if(err) {
                    console.error(err)
                    return
                } 
                res.redirect('/')
            })
        })


    }) 

app.listen(3001, () => {
    console.log('Server started at localhost:3001')
})