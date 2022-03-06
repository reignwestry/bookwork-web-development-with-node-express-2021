const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000
const handlers = require('./lib/handlers') //# pulls in the file lib/handlers


//# configure Handlebars view engine
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',

}))
app.set('view engine', 'handlebars')

//loads all static files in the public dir
app.use(express.static(__dirname + '/public')) 

//# Routes
app.get('/', handlers.home)
app.get('/about', handlers.about)
//# CatchAll Handlers
//? custom 404 page - Not Found Page
app.use(handlers.notFound)
//? custom 500 page - Server Errors
app.use(handlers.serverError)


//app.listen(port, () => console.log(`Express started on http://localhost:${port}; ` + `press Ctrl-C to terminate.`))
if (require.main === module) {
    app.listen(port, () => {
        console.log( `Express started on http://localhost:${port}` + `; press Ctrl-C to terminate.`)
    })
} else {
    module.exports = app
}