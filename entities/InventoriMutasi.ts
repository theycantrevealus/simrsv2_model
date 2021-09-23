import { Column, Entity, Index } from "typeorm";

@Index("inventori_mutasi_pkey", ["uid"], { unique: true })
@Entity("inventori_mutasi", { schema: "public" })
export class InventoriMutasi {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("date", { name: "tanggal" })
  tanggal: string;

  @Column("uuid", { name: "dari" })
  dari: string;

  @Column("uuid", { name: "ke" })
  ke: string;

  @Column("uuid", { name: "pegawai" })
  pegawai: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("character varying", { name: "kode", nullable: true, length: 30 })
  kode: string | null;

  @Column("character", { name: "status", nullable: true, length: 1 })
  status: string | null;

  @Column("uuid", { name: "diproses_oleh", nullable: true })
  diprosesOleh: string | null;
}
