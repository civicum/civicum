# Data Sources for Official Chilean Socioeconomic and Fiscal Indicators (1955-2024)

This document lists the official sources for each indicator intended to replace synthetic data in `presupuestoDataEnriquecido.ts`.

| Indicator | Description | Source | Frequency | Notes |
|-----------|-------------|--------|-----------|-------|
| Población total | Total residents | INE (Censos y Proyecciones) | Annual (or quinquennial) | Use series base Censo 2024, 1955‑2024 |
| Pobreza nacional | % households under poverty line | CASEN (MINDES) | Biennial | Interpolate missing years |
| Deuda pública (% PIB) | Central government debt | Banco Central de Chile / MINHACIENDA | Annual | |
| Matrícula total (educación) | Students enrolled | MINEDUC (Centro de Estudios) | Annual | |
| Gasto educativo por estudiante | Education spending per student | DIPRES (gasto funcional) + Población (INE) | Annual | Derived |
| Gasto salud per cápita | Health spending per capita | DIPRES + Población | Annual | Derived |
| Proporción deuda/ingresos | Debt service vs municipal income | DIPRES (municipal income/expense) | Annual | Derived |
| Acceso a agua potable | % population with potable water | SISS / ENCASES | Annual | |
| Tasa de alfabetización | % literate population (15+) | INE (Censo) / UNESCO | Census years | Interpolate |
| Gasto en infraestructura per cápita | Urban development spending per capita | DIPRES (funcional) + Población | Annual | Derived |
| Gasto en vivienda per cápita | Housing spending per capita | DIPRES + Población | Annual | Derived |
| Gasto en transporte público per cápita | Transport spending per capita | DIPRES + Población | Annual | Derived |
| Gasto en seguridad pública per cápita | Security spending per capita | DIPRES + Población | Annual | Derived |
| Gasto en cultura y deporte per cápita | Culture & sport spending per capita | DIPRES + Población | Annual | Derived |
| Ingreso per cápita | Municipal income per capita | DIPRES + Población | Annual | Derived |
| Gasto total per cápita | Total municipal spending per capita | DIPRES + Población | Annual | Derived |
| Superavit/déficit per cápita | Net balance per capita | DIPRES + Población | Annual | Derived |

## Next Steps

For each source, we will:
1. Locate the official download page or API.
2. Download the file to `webapp/src/data/official/<source>/`.
3. Validate and convert to normalized CSV.
4. Build the enriched dataset.
5. Add source references to the UI.

Please review the above table and confirm if you would like to proceed with downloading sample data for any of these sources.