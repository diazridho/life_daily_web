import { Router } from 'express';
import { TasksService } from '../services/tasks.service';
import { sessionMiddleware } from '../middleware/auth.middleware';

const router = Router();
const tasksService = new TasksService();

router.use(sessionMiddleware);

router.get('/', async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        const tasks = await tasksService.getAll(userId);
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.post('/', async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        const newTask = await tasksService.create(userId, req.body);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.patch('/:id/complete', async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        const updatedTask = await tasksService.toggleComplete(req.params.id, userId);
        if (!updatedTask) return res.status(404).json({ error: 'Task not found' });

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        await tasksService.delete(req.params.id, userId);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;
