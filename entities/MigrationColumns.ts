import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("migration_columns_pkey", ["id"], { unique: true })
@Entity("migration_columns", { schema: "public" })
export class MigrationColumns {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "table_catalog", nullable: true })
  tableCatalog: string | null;

  @Column("character varying", { name: "table_schema", nullable: true })
  tableSchema: string | null;

  @Column("character varying", { name: "table_name", nullable: true })
  tableName: string | null;

  @Column("character varying", { name: "column_name", nullable: true })
  columnName: string | null;

  @Column("character varying", { name: "ordinal_position", nullable: true })
  ordinalPosition: string | null;

  @Column("character varying", { name: "column_default", nullable: true })
  columnDefault: string | null;

  @Column("character varying", { name: "is_nullable", nullable: true })
  isNullable: string | null;

  @Column("character varying", { name: "data_type", nullable: true })
  dataType: string | null;

  @Column("character varying", {
    name: "character_maximum_length",
    nullable: true,
  })
  characterMaximumLength: string | null;

  @Column("character varying", {
    name: "character_octet_length",
    nullable: true,
  })
  characterOctetLength: string | null;

  @Column("character varying", { name: "numeric_precision", nullable: true })
  numericPrecision: string | null;

  @Column("character varying", {
    name: "numeric_precision_radix",
    nullable: true,
  })
  numericPrecisionRadix: string | null;

  @Column("character varying", { name: "numeric_scale", nullable: true })
  numericScale: string | null;

  @Column("character varying", { name: "datetime_precision", nullable: true })
  datetimePrecision: string | null;

  @Column("character varying", { name: "interval_type", nullable: true })
  intervalType: string | null;

  @Column("character varying", { name: "interval_precision", nullable: true })
  intervalPrecision: string | null;

  @Column("character varying", {
    name: "character_set_catalog",
    nullable: true,
  })
  characterSetCatalog: string | null;

  @Column("character varying", { name: "character_set_schema", nullable: true })
  characterSetSchema: string | null;

  @Column("character varying", { name: "character_set_name", nullable: true })
  characterSetName: string | null;

  @Column("character varying", { name: "collation_catalog", nullable: true })
  collationCatalog: string | null;

  @Column("character varying", { name: "collation_schema", nullable: true })
  collationSchema: string | null;

  @Column("character varying", { name: "collation_name", nullable: true })
  collationName: string | null;

  @Column("character varying", { name: "domain_catalog", nullable: true })
  domainCatalog: string | null;

  @Column("character varying", { name: "domain_schema", nullable: true })
  domainSchema: string | null;

  @Column("character varying", { name: "domain_name", nullable: true })
  domainName: string | null;

  @Column("character varying", { name: "udt_catalog", nullable: true })
  udtCatalog: string | null;

  @Column("character varying", { name: "udt_schema", nullable: true })
  udtSchema: string | null;

  @Column("character varying", { name: "udt_name", nullable: true })
  udtName: string | null;

  @Column("character varying", { name: "scope_catalog", nullable: true })
  scopeCatalog: string | null;

  @Column("character varying", { name: "scope_schema", nullable: true })
  scopeSchema: string | null;

  @Column("character varying", { name: "scope_name", nullable: true })
  scopeName: string | null;

  @Column("character varying", { name: "maximum_cardinality", nullable: true })
  maximumCardinality: string | null;

  @Column("character varying", { name: "dtd_identifier", nullable: true })
  dtdIdentifier: string | null;

  @Column("character varying", { name: "is_self_referencing", nullable: true })
  isSelfReferencing: string | null;

  @Column("character varying", { name: "is_identity", nullable: true })
  isIdentity: string | null;

  @Column("character varying", { name: "identity_generation", nullable: true })
  identityGeneration: string | null;

  @Column("character varying", { name: "identity_start", nullable: true })
  identityStart: string | null;

  @Column("character varying", { name: "identity_increment", nullable: true })
  identityIncrement: string | null;

  @Column("character varying", { name: "identity_maximum", nullable: true })
  identityMaximum: string | null;

  @Column("character varying", { name: "identity_minimum", nullable: true })
  identityMinimum: string | null;

  @Column("character varying", { name: "identity_cycle", nullable: true })
  identityCycle: string | null;

  @Column("character varying", { name: "is_generated", nullable: true })
  isGenerated: string | null;

  @Column("character varying", {
    name: "generation_expression",
    nullable: true,
  })
  generationExpression: string | null;

  @Column("character varying", { name: "is_updatable", nullable: true })
  isUpdatable: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("integer", { name: "table_id", nullable: true })
  tableId: number | null;
}
