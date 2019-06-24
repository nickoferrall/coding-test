const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig');

router.get('/', async (req, res) => {
  try {
    const locations = await db('location');
    console.log(locations);
    res.status(200).json(locations);
  } catch (error) {
    res.status(400).json({
      errorMessage: 'Unable to retreive data.'
    });
  }
});

router.get('/search', async (req, res) => {
  try {
    const searchVal = req.headers.value.toLowerCase();
    const locations = await db('location');
    const postcodeArr = [];
    for (let i = 0; i < locations.length; i++) {
      if (locations[i].postcode.toLowerCase().includes(searchVal)) {
        postcodeArr.push(locations[i]);
      }
    }

    let nameArr = [];
    for (let i = 0; i < locations.length; i++) {
      if (
        !postcodeArr.includes(locations[i].name) &&
        locations[i].name.toLowerCase().includes(searchVal)
      ) {
        nameArr.push(locations[i]);
      }
    }
    nameArr.sort((a, b) => a.name > b.name);
    const mergedArr = postcodeArr.concat(nameArr);
    res.status(200).json(mergedArr);
  } catch (error) {
    res.status(400).json({
      errorMessage: `${error}`
    });
  }
});

module.exports = router;
