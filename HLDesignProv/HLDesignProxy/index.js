const express = require('express');
const request = require('request');

const app = express()

// Middleware for comming around CORS errors 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

// For requests of the standard items that are shown at launch of the site
app.get('/standard', (req, res) => {
  const standardUrl = 'http://webshop.wm3.se/api/v1/shop/products.json?media_file=true&limit=6'
  request(
    { url: standardUrl },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message })
      }
      res.json(JSON.parse(body))
    }
  )
})

// For requests of searching for specific products
app.get('/search', (req, res) => {
  const searchTerm = req.query.q
  const searchUrl = 'http://webshop.wm3.se/api/v1/shop/products/search.json?q=' + searchTerm+ '&media_file=true'
  request(
    { url:  searchUrl},
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message })
      }
      res.json(JSON.parse(body))
    }
  )
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy is listening on ${PORT}`))