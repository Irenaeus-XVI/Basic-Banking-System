import express from 'express'
import { addUser, getAllUser, transfer } from './controller/user.controller.js';
const router = express.Router();

router.get('/customers', getAllUser)
router.post('/customers', addUser)
router.patch('/customers', transfer)

export default router