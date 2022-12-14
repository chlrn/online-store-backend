const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const chekRole = require('../middleware/checkRoleMiddleware')

router.post('/', chekRole('ADMIN'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)


module.exports = router