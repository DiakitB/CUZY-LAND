
const express = require('express')
const customizedOrderController = require('../controllers/custimizedOrder')

const router = express.Router()

router.get('/order', customizedOrderController.getCustomizedOrder)

module.exports = router