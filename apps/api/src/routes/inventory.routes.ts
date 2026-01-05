import { Router } from 'express';
import { InventoryService } from '../services/inventory.service';
import { sessionMiddleware } from '../middleware/auth.middleware';

const router = Router();
const inventoryService = new InventoryService();

router.use(sessionMiddleware);

router.get('/', async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        const { query } = req.query;
        const items = await inventoryService.getAll(userId, query as string);
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.post('/', async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        const newItem = await inventoryService.create(userId, req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        await inventoryService.delete(req.params.id, userId);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;
