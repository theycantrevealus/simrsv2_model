import { Column, Entity, Index } from "typeorm";

@Index("master_unit_pkey", ["uid"], { unique: true })
@Entity("master_unit", { schema: "public" })
export class MasterUnit {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nama", length: 50 })
  nama: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character varying", { name: "kode", nullable: true, length: 10 })
  kode: string | null;

  @Column("uuid", { name: "gudang", nullable: true })
  gudang: string | null;
}
