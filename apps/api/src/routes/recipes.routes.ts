import { Router } from 'express';
import { RecipesService } from '../services/recipes.service';
import { sessionMiddleware } from '../middleware/auth.middleware';

const router = Router();
const recipesService = new RecipesService();

// Apply auth middleware to all routes
router.use(sessionMiddleware);

router.get('/', async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        const { query, category } = req.query;
        const recipes = await recipesService.getAll(userId, query as string, category as string);
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        const recipe = await recipesService.getById(req.params.id, userId);
        if (!recipe) return res.status(404).json({ error: 'Recipe not found' });

        res.json(recipe);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.post('/', async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        const { ingredients, steps, ...recipeData } = req.body;
        const newRecipe = await recipesService.create(userId, recipeData, ingredients, steps);
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        await recipesService.delete(req.params.id, userId);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;
