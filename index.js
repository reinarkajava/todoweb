const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('test')
}) 


app.listen(3001, () => {
    console.log('example app is started at http://localhost:3001')
})
