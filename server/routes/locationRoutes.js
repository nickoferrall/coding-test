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
    const searchVal = req.body.value;
    console.log('SEARCH VAL', req.body.value);
    const locations = await db('location');
    const testArr = [];
    for (let i = 0; i < locations.length; i++) {
      if (locations[i].postcode.toLowerCase().includes('br')) {
        testArr.push(locations[i]);
      }
      if (locations[i].name.toLowerCase().includes('br')) {
        if (!testArr.includes(locations[i].name)) {
          testArr.push(locations[i]);
        }
      }
    }
    res.status(200).json(testArr);
  } catch (error) {
    res.status(400).json({
      errorMessage: `${error}`
    });
  }
});

module.exports = router;
