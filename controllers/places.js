const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

// breads.post('/', (req, res) => {
//     console.log(req.body)
//     if(req.body.hasGluten === 'on') {
//       req.body.hasGluten = 'true'
//     } else {
//       req.body.hasGluten = 'false'
//     }
//     Bread.push(req.body)
//     res.redirect('/breads')
//   })

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'images/thai-rest-rant.jpeg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-foam-cat.jpeg'
      }]
          res.render('places/index', {places})
    // res.send('GET /places')
})


router.get('/show', (req, res) => {
    res.render('places/show')
})

router.get('/edit', (req, res) => {
    res.render('places/edit')
})

module.exports = router
