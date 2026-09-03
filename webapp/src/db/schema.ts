import { pgTable, text, timestamp, uuid, integer, jsonb, serial, boolean } from 'drizzle-orm/pg-core';

export const profiles = pgTable('profiles', {
    id: uuid('id').primaryKey().defaultRandom(),
    email: text('email').unique().notNull(),
    fullName: text('full_name'),
    level: integer('level').default(0), // Validation Levels L0 to L4
    karma: integer('karma').default(0),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});

// Regiones de Chile — IDs semánticos (r01-r16)
export const regions = pgTable('regions', {
    id: text('id').primaryKey(), // ej: 'r07' = Metropolitana
    name: text('name').notNull(),
    geom: text('geom'), // PostGIS placeholder
});

// Comunas de Chile — IDs semánticos (cRRCC ej: c0701 = Santiago)
export const communes = pgTable('communes', {
    id: text('id').primaryKey(), // ej: 'c0701' = Santiago
    regionId: text('region_id').references(() => regions.id),
    name: text('name').notNull(),
    geom: text('geom'), // PostGIS placeholder
});

export const communityReports = pgTable('community_reports', {
    id: uuid('id').primaryKey().defaultRandom(),
    authorId: uuid('author_id').references(() => profiles.id),
    communeId: text('commune_id').references(() => communes.id),
    title: text('title').notNull(),
    description: text('description').notNull(),
    status: text('status').default('PENDING'),
    evidenceUrls: jsonb('evidence_urls').default('[]'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});

// Sprint 2 — Canal Universal de Acceso
export const smsInteractions = pgTable('sms_interactions', {
    id: serial('id').primaryKey(),
    phone: text('phone').notNull(),
    message: text('message'),
    action: text('action'), // 'confirm', 'vote', 'report', 'info'
    referenceId: text('reference_id'), // proposal_id / case_id
    response: text('response'), // 'YES', 'NO', 'MAYBE'
    status: text('status').default('received'),
    createdAt: timestamp('created_at').defaultNow(),
});

export const ivrCalls = pgTable('ivr_calls', {
    id: serial('id').primaryKey(),
    phone: text('phone'),
    menuSelection: text('menu_selection'),
    transcript: text('transcript'),
    action: text('action'),
    referenceId: text('reference_id'),
    status: text('status').default('active'),
    createdAt: timestamp('created_at').defaultNow(),
});

export const kiosks = pgTable('kiosks', {
    id: serial('id').primaryKey(),
    location: text('location').notNull(),
    communeId: text('commune_id').references(() => communes.id),
    active: boolean('active').default(true),
    verifiedByUserId: uuid('verified_by_user_id').references(() => profiles.id),
    createdAt: timestamp('created_at').defaultNow(),
});
