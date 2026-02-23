import { pgTable, text, timestamp, uuid, integer, jsonb } from 'drizzle-orm/pg-core';

export const profiles = pgTable('profiles', {
    id: uuid('id').primaryKey().defaultRandom(),
    email: text('email').unique().notNull(),
    fullName: text('full_name'),
    level: integer('level').default(0), // Validation Levels L0 to L4
    karma: integer('karma').default(0),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});

export const regions = pgTable('regions', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    geom: text('geom'), // PostGIS placeholder
});

export const communes = pgTable('communes', {
    id: uuid('id').primaryKey().defaultRandom(),
    regionId: uuid('region_id').references(() => regions.id),
    name: text('name').notNull(),
    geom: text('geom'), // PostGIS placeholder
});

export const communityReports = pgTable('community_reports', {
    id: uuid('id').primaryKey().defaultRandom(),
    authorId: uuid('author_id').references(() => profiles.id),
    communeId: uuid('commune_id').references(() => communes.id),
    title: text('title').notNull(),
    description: text('description').notNull(),
    status: text('status').default('PENDING'),
    evidenceUrls: jsonb('evidence_urls').default('[]'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});
