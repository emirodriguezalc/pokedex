const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/api/', (req, res) => {
  fetch('https://pokeapi.co/api/v2/pokemon'/*?limit=0&offset=200*/)
    .then(data => data.json())
    .then(json => res.send(json))
})

app.get('/api/pokemon/:id', (req, res) => {
  const id = req.params.id
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(data => data.json())
    .then(json => {
      res.send({
        id: json.id,
        name: json.name,
        height: json.height,
        weight: json.weight,
        abilities: json.abilities,
        front_default: json.sprites.front_default,
        front_shiny: json.sprites.front_shiny,
      })
    })
})

app.get('/api/pokemon/:id/evolutions', (req, res) => {
  const id = req.params.id;
  fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
    .then(data => data.json())
    .then(json => res.send(json))
})

app.get('/api/filters', (req, res) => {
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
    filter = ability.replace(/\s/g, '-');
  }

  fetch(`https://pokeapi.co/api/v2/${filterName}/${filter}`)
    .then(data => data.json())
    .then(json => res.send(json.pokemon))
})

app.listen(8080, () => console.log('server up'));
