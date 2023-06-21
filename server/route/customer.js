import * as customerController from "../controller/customer.js";
import express from 'express';

const router = express.Router();

router.get('/', customerController.getAll);
router.get('/:id', customerController.getById);
router.post('/', customerController.createCustomer);
router.patch('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.removeCustomer);

export default router;