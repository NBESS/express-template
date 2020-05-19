
const express = require('express');

const router = express.Router();

// GET /contact
router.get('/', (req, res) => {
    res.render('contact', {
        title: 'Contact Form',
        heading: 'Contact Me, If You Will!',
        submitted: false,
    });
});

// POST /contact
router.post('/', (req, res) => {
    console.log(req.body);
    res.render('contact', {
        title: 'Contact Info Received',
        heading: 'Thank You!',
        submitted: true,
    });
});

module.exports = router;