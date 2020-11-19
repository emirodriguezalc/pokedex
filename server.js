const express = require('express');
const fetch = require('node-fetch');
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
 let filterName;
 let filter;

 const type = req.query.type || null;
 const ability = req.query.ability || null;

 if (type) {
  filterName = 'type'
  filter = type;
 }
 if (ability) {
  filterName = 'ability'
  filter = ability
 }

 fetch(`https://pokeapi.co/api/v2/${filterName}/${filter}`)
  .then(data => data.json())
  .then(json => res.send(json))
})

app.listen(3000, () => console.log('server up'));
