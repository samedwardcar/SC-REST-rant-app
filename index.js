require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
    //   res.send('Hello world home page')

  })
  
  app.get('*', (req, res) => {
    res.render('error404')
    // res.status(404).send('<h1 style="color: red; text-align: center;">404 Page</h1>')

  })

app.listen(process.env.PORT)


// require('dotenv').config()

// const express = require('express')
// const app = express()



// app.use('/places', require('./controllers/places'))

// app.get('/', (req, res) => {
//     res.send('Home Page')
// })

// app.get('*', (req,res) => {
//     res.status(404).send('<h1 style="color: red; text-align: center;">404 Page</h1>')
// })

// app.listen(process.env.PORT)