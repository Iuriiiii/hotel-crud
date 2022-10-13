const router = require('express').Router();
const service = require('./users.service');
const { body } = require('express-validator');

router.get('/', service.getAllUsers);
router.get('/:user_id(\\d+)', service.getUserById);

router.post(
    '/',
    body('first_name').isAlphanumeric().isLength({ min: 3, max: 15 }),
    body('last_name').isAlphanumeric().isLength({ min: 3, max: 15 }),
    body('age').isNumeric(),
    service.createUser);

module.exports = router;