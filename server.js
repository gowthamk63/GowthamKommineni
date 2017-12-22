// server.js
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

const api = require('./server/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

const port = process.env.PORT || '3000';
app.set('port', port);

// Start the app by listening on the default
const server = http.createServer(app);
server.listen(port, () => console.log('running'));