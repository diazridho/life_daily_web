import { db } from '../lib/db';
import { recipes, ingredients, steps } from '../db/schema/recipes';
import { eq, and, ilike } from 'drizzle-orm';

export class RecipesService {
    async getAll(userId: string, query?: string, category?: string) {
        let conditions = [eq(recipes.userId, userId)];

        if (category && category !== 'All') {
            conditions.push(eq(recipes.category, category));
        }

        if (query) {
            conditions.push(ilike(recipes.name, `%${query}%`));
        }

        return await db.query.recipes.findMany({
            where: and(...conditions),
            with: {
                ingredients: true,
                steps: true
            },
            orderBy: (recipes, { desc }) => [desc(recipes.createdAt)],
        });
    }

    async getById(id: string, userId: string) {
        return await db.query.recipes.findFirst({
            where: and(eq(recipes.id, id), eq(recipes.userId, userId)),
            with: {
                ingredients: {
                    orderBy: (ingredients, { asc }) => [asc(ingredients.sortOrder)]
                },
                steps: {
                    orderBy: (steps, { asc }) => [asc(steps.sortOrder)]
                }
            }
        });
    }

    async create(userId: string, data: typeof recipes.$inferInsert, ingredientsData: any[], stepsData: any[]) {
        return await db.transaction(async (tx) => {
            const [newRecipe] = await tx.insert(recipes).values({
                ...data,
                userId
            }).returning();

            if (ingredientsData && ingredientsData.length > 0) {
                await tx.insert(ingredients).values(
                    ingredientsData.map((ing, idx) => ({
                        recipeId: newRecipe.id,
                        content: ing.content || ing, // Handle if just string or obj
                        sortOrder: idx
                    }))
                );
            }

            if (stepsData && stepsData.length > 0) {
                await tx.insert(steps).values(
                    stepsData.map((step, idx) => ({
                        recipeId: newRecipe.id,
                        title: step.title,
                        description: step.description,
                        sortOrder: idx
                    }))
                );
            }

            return newRecipe;
        });
    }

    async delete(id: string, userId: string) {
        return await db.delete(recipes)
            .where(and(eq(recipes.id, id), eq(recipes.userId, userId)))
            .returning();
    }
}
