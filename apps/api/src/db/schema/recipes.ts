import { pgTable, uuid, text, integer, timestamp, boolean } from 'drizzle-orm/pg-core';
import { users } from './users';

export const recipes = pgTable('recipes', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id').references(() => users.id).notNull(),
    name: text('name').notNull(),
    imageUrl: text('image_url'),
    category: text('category').notNull(),   // 'breakfast' | 'dinner' | 'diet' | 'dessert'
    difficulty: text('difficulty'),          // 'easy' | 'medium' | 'hard'
    calories: integer('calories'),
    servings: integer('servings'),
    notes: text('notes'),
    isFavorite: boolean('is_favorite').default(false),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const ingredients = pgTable('ingredients', {
    id: uuid('id').defaultRandom().primaryKey(),
    recipeId: uuid('recipe_id').references(() => recipes.id, { onDelete: 'cascade' }).notNull(),
    content: text('content').notNull(),
    checked: boolean('checked').default(false),
    sortOrder: integer('sort_order').default(0),
});

export const steps = pgTable('steps', {
    id: uuid('id').defaultRandom().primaryKey(),
    recipeId: uuid('recipe_id').references(() => recipes.id, { onDelete: 'cascade' }).notNull(),
    title: text('title').notNull(),
    description: text('description').notNull(),
    sortOrder: integer('sort_order').default(0),
});
