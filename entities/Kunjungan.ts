import { Column, Entity, Index } from "typeorm";

@Index("kunjungan_pkey", ["uid"], { unique: true })
@Entity("kunjungan", { schema: "public" })
export class Kunjungan {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("timestamp without time zone", { name: "waktu_masuk" })
  waktuMasuk: Date;

  @Column("timestamp without time zone", {
    name: "waktu_keluar",
    nullable: true,
  })
  waktuKeluar: Date | null;

  @Column("uuid", { name: "pegawai" })
  pegawai: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character varying", {
    name: "pj_pasien",
    nullable: true,
    length: 100,
  })
  pjPasien: string | null;

  @Column("character varying", {
    name: "info_didapat_dari",
    nullable: true,
    length: 100,
  })
  infoDidapatDari: string | null;

  @Column("integer", { name: "cara_datang", nullable: true })
  caraDatang: number | null;

  @Column("text", { name: "keterangan_cara_datang", nullable: true })
  keteranganCaraDatang: string | null;
}
