const router = require('express').Router();
const service = require('./transactions.service');
const { body } = require('express-validator');

router.get('/', service.getAllTransactions);
router.get('/:t_id(\\d+)', service.getTransactionById);

module.exports = router;