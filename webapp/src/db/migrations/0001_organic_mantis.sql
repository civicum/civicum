-- Paso 1: Eliminar foreign keys que bloquean el cambio de tipo
ALTER TABLE "community_reports" DROP CONSTRAINT IF EXISTS "community_reports_commune_id_communes_id_fk";
--> statement-breakpoint
ALTER TABLE "communes" DROP CONSTRAINT IF EXISTS "communes_region_id_regions_id_fk";

--> statement-breakpoint
-- Paso 2: Cambiar tipos de UUID a text
ALTER TABLE "regions" ALTER COLUMN "id" SET DATA TYPE text;
--> statement-breakpoint
ALTER TABLE "regions" ALTER COLUMN "id" DROP DEFAULT;
--> statement-breakpoint
ALTER TABLE "communes" ALTER COLUMN "id" SET DATA TYPE text;
--> statement-breakpoint
ALTER TABLE "communes" ALTER COLUMN "id" DROP DEFAULT;
--> statement-breakpoint
ALTER TABLE "communes" ALTER COLUMN "region_id" SET DATA TYPE text;
--> statement-breakpoint
ALTER TABLE "community_reports" ALTER COLUMN "commune_id" SET DATA TYPE text;

--> statement-breakpoint
-- Paso 3: Recrear foreign keys
ALTER TABLE "communes" ADD CONSTRAINT "communes_region_id_regions_id_fk" FOREIGN KEY ("region_id") REFERENCES "regions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
--> statement-breakpoint
ALTER TABLE "community_reports" ADD CONSTRAINT "community_reports_commune_id_communes_id_fk" FOREIGN KEY ("commune_id") REFERENCES "communes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;