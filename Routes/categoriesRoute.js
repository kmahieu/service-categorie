import express from 'express';
import { getCategories, getCategorie, createCategorie, deleteCategorie, updateCategorie,} from "../controllers/categoriesControllers.js"

const router = express.Router();

router.get('/categories', getCategories)
router.get('/categorie/:id', getCategorie)
router.post('/categorie', createCategorie);
router.delete('/categorie/:id', deleteCategorie)
router.put('/categorie/:id', updateCategorie)

export default router;