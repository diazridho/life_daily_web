import { db } from '../lib/db';
import { tasks } from '../db/schema/tasks';
import { eq, and } from 'drizzle-orm';

export class TasksService {
    async getAll(userId: string) {
        return await db.query.tasks.findMany({
            where: eq(tasks.userId, userId),
            orderBy: (t, { asc, desc }) => [
                // Sort by verified/completed status first (false first), then priority? 
                // Simple sort by createdAt descending for now
                desc(t.createdAt)
            ],
        });
    }

    async create(userId: string, data: typeof tasks.$inferInsert) {
        const [newTask] = await db.insert(tasks).values({
            ...data,
            userId
        }).returning();
        return newTask;
    }

    async toggleComplete(id: string, userId: string) {
        const task = await db.query.tasks.findFirst({
            where: and(eq(tasks.id, id), eq(tasks.userId, userId))
        });

        if (!task) return null;

        const [updatedTask] = await db.update(tasks)
            .set({ isCompleted: !task.isCompleted })
            .where(eq(tasks.id, id))
            .returning();

        return updatedTask;
    }

    async delete(id: string, userId: string) {
        return await db.delete(tasks)
            .where(and(eq(tasks.id, id), eq(tasks.userId, userId)))
            .returning();
    }
}
