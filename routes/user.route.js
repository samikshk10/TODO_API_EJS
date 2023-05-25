const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).json([{
        firstname: 'samik',
        lastname: 'shakya'
    }])
});




router.get('/:id', (req, res) => {
    console.log(req.params);
    res.status(200).json([{
        firstname: 'samik',
        lastname: 'shk'
    }])

});


module.exports = router;