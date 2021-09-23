import { Column, Entity, Index } from "typeorm";

@Index("inventori_amprah_proses_pkey", ["uid"], { unique: true })
@Entity("inventori_amprah_proses", { schema: "public" })
export class InventoriAmprahProses {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "amprah" })
  amprah: string;

  @Column("uuid", { name: "pegawai" })
  pegawai: string;

  @Column("date", { name: "tanggal" })
  tanggal: string;

  @Column("uuid", { name: "kepala_unit_pengamprah", nullable: true })
  kepalaUnitPengamprah: string | null;

  @Column("uuid", { name: "diterima_unit_pengamprah", nullable: true })
  diterimaUnitPengamprah: string | null;

  @Column("uuid", { name: "koordinator_persediaan", nullable: true })
  koordinatorPersediaan: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("time with time zone", { name: "deleted_at", nullable: true })
  deletedAt: string | null;

  @Column("character varying", { name: "kode", nullable: true, length: 50 })
  kode: string | null;
}
