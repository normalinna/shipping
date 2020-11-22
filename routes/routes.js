const { Router } = require('express');

const router = Router();

router.get('/cart', async (req,res) => {
    res.end();
});

router.get('/', async (req,res) => {
    res.redirect(302,'/cart');
});

router.get('/shipping', async (req,res) => {
    res.end();
});

module.exports = router;