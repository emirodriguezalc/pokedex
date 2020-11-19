const express = require('express');
const fetch = require('node-fetch')

const app = express();

app.get('/', (req, res) => {
 fetch('https://pokeapi.co/api/v2/pokemon'/*?limit=0&offset=200*/)
  .then(data => data.json())
  .then(json => res.send(json))
})

app.get('/pokemon/:id', (req, res) => {
 const id = req.params.id
 console.log('i am slash id');
 fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(data => data.json())
  .then(json => res.send(json))
})

app.get('/pokemon/:id/evolutions', (req, res) => {
 const id = req.params.id
 console.log('i am slash evolution');
 fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
  .then(data => data.json())
  .then(json => res.send(json))
})

app.get('/filters', (req, res) => {
 const type = req.query.type
 fetch(`https://pokeapi.co/api/v2/type/${type}`)
  .then(data => data.json())
  .then(json => res.send(json))
})

app.listen(3000, () => console.log('server up'));