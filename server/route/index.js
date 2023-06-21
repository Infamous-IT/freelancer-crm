import {Router} from 'express';
import user from './user.js';
import customer from "./customer.js";

const router = Router();

router.use('/users', user);
router.use("/customers", customer);

export default router;