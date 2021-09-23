import { Column, Entity, Index } from "typeorm";

@Index("inventori_amprah_pkey", ["uid"], { unique: true })
@Entity("inventori_amprah", { schema: "public" })
export class InventoriAmprah {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "unit" })
  unit: string;

  @Column("uuid", { name: "pegawai" })
  pegawai: string;

  @Column("uuid", { name: "diproses", nullable: true })
  diproses: string | null;

  @Column("date", { name: "tanggal" })
  tanggal: string;

  @Column("character", { name: "status", length: 1 })
  status: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("character varying", {
    name: "kode_amprah",
    nullable: true,
    length: 30,
  })
  kodeAmprah: string | null;

  @Column("text", { name: "alasan_tolak", nullable: true })
  alasanTolak: string | null;
}
