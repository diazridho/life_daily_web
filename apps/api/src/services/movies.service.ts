import { db } from '../lib/db';
import { movies } from '../db/schema/movies';
import { eq, and } from 'drizzle-orm';

export class MoviesService {
    async getAll(userId: string) {
        return await db.query.movies.findMany({
            where: eq(movies.userId, userId),
            orderBy: (m, { desc }) => [desc(m.createdAt)],
        });
    }

    async create(userId: string, data: typeof movies.$inferInsert) {
        const [newMovie] = await db.insert(movies).values({
            ...data,
            userId
        }).returning();
        return newMovie;
    }

    async toggleWatched(id: string, userId: string) {
        const movie = await db.query.movies.findFirst({
            where: and(eq(movies.id, id), eq(movies.userId, userId))
        });

        if (!movie) return null;

        const [updatedMovie] = await db.update(movies)
            .set({ isWatched: !movie.isWatched })
            .where(eq(movies.id, id))
            .returning();

        return updatedMovie;
    }

    async delete(id: string, userId: string) {
        return await db.delete(movies)
            .where(and(eq(movies.id, id), eq(movies.userId, userId)))
            .returning();
    }
}
