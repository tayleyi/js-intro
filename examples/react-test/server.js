const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());

//const __dirname = dirname(fileURLToPath(import.meta.url));
const places = JSON.parse(fs.readFileSync('./places.json'));

/**
 * 
 */
app.get('/', (req, res ) => {
	res.setHeader('Content-Type', 'application/json');
	const names = places.map(({ name }) => name);
	res.json(names);
});

app.get('/place/:name', (req, res) => {
  console.log(places);
  for (let i = 0; i < places.length; i++) {
	if (places[i].name === req.params.name) {
	  res.setHeader('Content-Type', 'application/json');
	  res.json(places[i]);
	  return;
	}
  }
  res.sendStatus(404);
});

app.listen(port, () => console.log (`listening on port: ${port}`));