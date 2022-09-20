import express from 'express';
import { getCategories, getCategorie, createCategorie, deleteCategorie, updateCategorie,} from "../controllers/categoriesControllers.js"

const router = express.Router();

router.get('/articles', getCategories)
router.get('/article/:id', getCategorie)
router.post('/article', createCategorie);
router.delete('/article/:id', deleteCategorie)
router.put('/article/:id', updateCategorie)

export default router;