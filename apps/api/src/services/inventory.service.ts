import { db } from '../lib/db';
import { inventoryItems } from '../db/schema/inventory';
import { eq, and, ilike } from 'drizzle-orm';

export class InventoryService {
    async getAll(userId: string, query?: string) {
        let conditions = [eq(inventoryItems.userId, userId)];

        if (query) {
            conditions.push(ilike(inventoryItems.name, `%${query}%`));
        }

        return await db.query.inventoryItems.findMany({
            where: and(...conditions),
            orderBy: (items, { desc }) => [desc(items.createdAt)],
        });
    }

    async create(userId: string, data: typeof inventoryItems.$inferInsert) {
        const [newItem] = await db.insert(inventoryItems).values({
            ...data,
            userId
        }).returning();
        return newItem;
    }

    async delete(id: string, userId: string) {
        return await db.delete(inventoryItems)
            .where(and(eq(inventoryItems.id, id), eq(inventoryItems.userId, userId)))
            .returning();
    }
}
