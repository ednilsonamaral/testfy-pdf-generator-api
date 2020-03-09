const express = require('express')
const router = express.Router()

const HANDLERS = {
	create: require('./handlers/create')
}

router.post('/create', HANDLERS.create)

module.exports = router
