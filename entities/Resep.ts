import { Column, Entity, Index } from "typeorm";

@Index("resep_pkey", ["uid"], { unique: true })
@Entity("resep", { schema: "public" })
export class Resep {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "kunjungan" })
  kunjungan: string;

  @Column("uuid", { name: "antrian" })
  antrian: string;

  @Column("uuid", { name: "asesmen" })
  asesmen: string;

  @Column("uuid", { name: "dokter" })
  dokter: string;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("double precision", { name: "total", precision: 53 })
  total: number;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character", { name: "status_resep", nullable: true, length: 1 })
  statusResep: string | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("text", { name: "keterangan_racikan", nullable: true })
  keteranganRacikan: string | null;

  @Column("uuid", { name: "apoteker", nullable: true })
  apoteker: string | null;

  @Column("timestamp without time zone", {
    name: "waktu_panggil",
    nullable: true,
  })
  waktuPanggil: Date | null;

  @Column("timestamp without time zone", {
    name: "waktu_terima",
    nullable: true,
  })
  waktuTerima: Date | null;

  @Column("uuid", { name: "dipanggil_oleh", nullable: true })
  dipanggilOleh: string | null;

  @Column("uuid", { name: "diserahkan_oleh", nullable: true })
  diserahkanOleh: string | null;

  @Column("character varying", { name: "kode", nullable: true })
  kode: string | null;

  @Column("text", { name: "alergi_obat", nullable: true })
  alergiObat: string | null;

  @Column("text", { name: "alasan_ubah", nullable: true })
  alasanUbah: string | null;

  @Column("integer", { name: "iterasi", nullable: true })
  iterasi: number | null;

  @Column("character varying", {
    name: "type",
    nullable: true,
    default: () => "'B'",
  })
  type: string | null;

  @Column("text", { name: "alasan_tambahan", nullable: true })
  alasanTambahan: string | null;
}
