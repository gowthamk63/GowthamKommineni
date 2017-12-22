const express = require('express');
const axios = require('axios');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


/* GET project list from mock api */
router.get('/projects', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get('https://api.myjson.com/bins/ljyuh')
    .then(posts => {	
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});


module.exports = router;

