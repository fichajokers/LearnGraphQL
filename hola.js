const fetch = require('node-fetch');

var dice = 10;
var sides = 6;
var query = `query pasarVariables($dice: Int!, $sides: Int) {
    pasarVariables(numDice: $dice, numSides: $sides)
}`;

/*fetch('http://localhost:4000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables: { dice, sides },
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));*/

//var texto  = 'wena wena como andamio?';
var texto  = 1;

var queryHolaMundo = `query holaMundo {
    holaMundo
}`;

fetch('http://localhost:4000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    queryHolaMundo
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));