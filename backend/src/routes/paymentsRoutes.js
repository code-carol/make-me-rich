const express = require('express');
const paymentsController = require('../controllers/paymentsControllers');
const router = express.Router();

router.post('/', paymentsController.createPayment);
router.get('/', paymentsController.getAllPayments);
router.get('/:id', paymentsController.getPaymentById);
router.patch('/:id', paymentsController.updatePayment);
router.delete('/:id', paymentsController.deletePayment);

module.exports = router;