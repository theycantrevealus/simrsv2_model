import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("migration_sequences_pkey", ["id"], { unique: true })
@Entity("migration_sequences", { schema: "public" })
export class MigrationSequences {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "oid", nullable: true })
  oid: string | null;

  @Column("character varying", { name: "relname", nullable: true })
  relname: string | null;

  @Column("character varying", { name: "relnamespace", nullable: true })
  relnamespace: string | null;

  @Column("character varying", { name: "reltype", nullable: true })
  reltype: string | null;

  @Column("character varying", { name: "reloftype", nullable: true })
  reloftype: string | null;

  @Column("character varying", { name: "relowner", nullable: true })
  relowner: string | null;

  @Column("character varying", { name: "relam", nullable: true })
  relam: string | null;

  @Column("character varying", { name: "relfilenode", nullable: true })
  relfilenode: string | null;

  @Column("character varying", { name: "reltablespace", nullable: true })
  reltablespace: string | null;

  @Column("character varying", { name: "relpages", nullable: true })
  relpages: string | null;

  @Column("character varying", { name: "reltuples", nullable: true })
  reltuples: string | null;

  @Column("character varying", { name: "relallvisible", nullable: true })
  relallvisible: string | null;

  @Column("character varying", { name: "reltoastrelid", nullable: true })
  reltoastrelid: string | null;

  @Column("character varying", { name: "relhasindex", nullable: true })
  relhasindex: string | null;

  @Column("character varying", { name: "relisshared", nullable: true })
  relisshared: string | null;

  @Column("character varying", { name: "relpersistence", nullable: true })
  relpersistence: string | null;

  @Column("character varying", { name: "relkind", nullable: true })
  relkind: string | null;

  @Column("character varying", { name: "relnatts", nullable: true })
  relnatts: string | null;

  @Column("character varying", { name: "relchecks", nullable: true })
  relchecks: string | null;

  @Column("character varying", { name: "relhasrules", nullable: true })
  relhasrules: string | null;

  @Column("character varying", { name: "relhastriggers", nullable: true })
  relhastriggers: string | null;

  @Column("character varying", { name: "relhassubclass", nullable: true })
  relhassubclass: string | null;

  @Column("character varying", { name: "relrowsecurity", nullable: true })
  relrowsecurity: string | null;

  @Column("character varying", { name: "relforcerowsecurity", nullable: true })
  relforcerowsecurity: string | null;

  @Column("character varying", { name: "relispopulated", nullable: true })
  relispopulated: string | null;

  @Column("character varying", { name: "relreplident", nullable: true })
  relreplident: string | null;

  @Column("character varying", { name: "relispartition", nullable: true })
  relispartition: string | null;

  @Column("character varying", { name: "relrewrite", nullable: true })
  relrewrite: string | null;

  @Column("character varying", { name: "relfrozenxid", nullable: true })
  relfrozenxid: string | null;

  @Column("character varying", { name: "relminmxid", nullable: true })
  relminmxid: string | null;

  @Column("character varying", { name: "relacl", nullable: true })
  relacl: string | null;

  @Column("character varying", { name: "reloptions", nullable: true })
  reloptions: string | null;

  @Column("character varying", { name: "relpartbound", nullable: true })
  relpartbound: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
