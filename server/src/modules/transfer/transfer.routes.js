import express from 'express'
import { addTransfer, getAllTransfers } from './controller/transfer.controller.js';
const router = express.Router();

router.get('/transfers', getAllTransfers)
router.post('/transfers', addTransfer)

export default router