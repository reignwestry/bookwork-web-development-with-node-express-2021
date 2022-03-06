const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000
//pulls in extension
const fortune = require('./lib/fortune')

//# configure Handlebars view engine
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',

}))
app.set('view engine', 'handlebars')

//loads all static files in the public dir
app.use(express.static(__dirname + '/public')) 

//# Routes
app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => {
    res.render('about', { fortune: fortune.getFortune() })
})


//# CatchAll Handlers
//? custom 404 page
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

//? custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})


app.listen(port, () => console.log(`Express started on http://localhost:${port}; ` + `press Ctrl-C to terminate.`))