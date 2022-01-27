import express from "express";

import { 
    getAll, 
    createP,
    getById,
    updateP,
    deleteP
} from "../controllers/Products.js";
const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.patch('/:id', updateP);
router.delete('/:id', deleteP);
router.post('/', createP);


export default router;