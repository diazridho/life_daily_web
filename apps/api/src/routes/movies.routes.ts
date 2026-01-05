import { Router } from 'express';
import { MoviesService } from '../services/movies.service';
import { sessionMiddleware } from '../middleware/auth.middleware';

const router = Router();
const moviesService = new MoviesService();

router.use(sessionMiddleware);

router.get('/', async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        const movies = await moviesService.getAll(userId);
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.post('/', async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        const newMovie = await moviesService.create(userId, req.body);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.patch('/:id/watched', async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        const updatedMovie = await moviesService.toggleWatched(req.params.id, userId);
        if (!updatedMovie) return res.status(404).json({ error: 'Movie not found' });

        res.json(updatedMovie);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        await moviesService.delete(req.params.id, userId);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;
