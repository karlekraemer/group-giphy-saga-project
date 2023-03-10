const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;

// router.get('/', (req, res) => {
//   axios.get('http://api.giphy.com/v1/gifs/trending?api_key=asdfasdfasdf&limit=5').then((response) => {
//     res.send(response.data);
//   }).catch( err => {
//     res.sendStatus(500);
//   });
// })

// const express = require('express');
// const router = express.Router();
// const axios = require('axios');

// require('dotenv').config();

// router.get('/', (req, res) => {
//     console.log('inside the get route');
//     // request to 3rd party api
//     axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&limit=2&rating=pg`)
//     .then((response) => {
//         res.send(response.data);
//     }).catch( err => {
//         console.log('error getting giphys', err)
//         res.send(500);
//     })
// });

// module.exports = router;