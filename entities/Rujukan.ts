import { Column, Entity, Index } from "typeorm";

@Index("rujukan_pkey", ["uid"], { unique: true })
@Entity("rujukan", { schema: "public" })
export class Rujukan {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "poli" })
  poli: string;

  @Column("uuid", { name: "dokter" })
  dokter: string;

  @Column("uuid", { name: "penjamin" })
  penjamin: string;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("character", { name: "status", length: 1 })
  status: string;

  @Column("uuid", { name: "pegawai_rekam_medis", nullable: true })
  pegawaiRekamMedis: string | null;

  @Column("character varying", {
    name: "nomor_rujuk",
    nullable: true,
    length: 20,
  })
  nomorRujuk: string | null;

  @Column("uuid", { name: "antrian" })
  antrian: string;

  @Column("character", { name: "jenis_layanan", length: 5 })
  jenisLayanan: string;

  @Column("character", { name: "tipe_rujukan", length: 5 })
  tipeRujukan: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("uuid", { name: "tujuan_rujuk", nullable: true })
  tujuanRujuk: string | null;
}
