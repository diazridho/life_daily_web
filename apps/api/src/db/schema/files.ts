import { pgTable, uuid, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { users } from './users';

export const files = pgTable('files', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id').references(() => users.id).notNull(),
    filename: text('filename').notNull(),    // Original name
    storagePath: text('storage_path').notNull(), // Supabase storage path
    publicUrl: text('public_url').notNull(),
    size: integer('size').notNull(),
    mimeType: text('mime_type').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});
