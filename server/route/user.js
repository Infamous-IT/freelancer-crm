import * as userController from '../controller/user.js';
import {authMiddleware} from "../middleware/authMiddleware.js";
import express from 'express';

const router = express.Router();

router.get('/', userController.getAll);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', authMiddleware, userController.logout)
router.get('/:id', userController.getById);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.removeUser);

export default router;