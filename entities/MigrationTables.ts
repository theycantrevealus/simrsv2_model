import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("migration_tables_pkey", ["id"], { unique: true })
@Entity("migration_tables", { schema: "public" })
export class MigrationTables {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character varying", { name: "schemaname", nullable: true })
  schemaname: string | null;

  @Column("character varying", { name: "tableowner", nullable: true })
  tableowner: string | null;

  @Column("character varying", { name: "tablespace", nullable: true })
  tablespace: string | null;

  @Column("character varying", { name: "hasindexes", nullable: true })
  hasindexes: string | null;

  @Column("character varying", { name: "hasrules", nullable: true })
  hasrules: string | null;

  @Column("character varying", { name: "hastriggers", nullable: true })
  hastriggers: string | null;

  @Column("character varying", { name: "rowsecurity", nullable: true })
  rowsecurity: string | null;
}
