import { Column, Entity, Index } from "typeorm";

@Index("rawat_inap_pkey", ["uid"], { unique: true })
@Entity("rawat_inap", { schema: "public" })
export class RawatInap {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("uuid", { name: "dokter" })
  dokter: string;

  @Column("uuid", { name: "penjamin" })
  penjamin: string;

  @Column("uuid", { name: "kunjungan" })
  kunjungan: string;

  @Column("timestamp without time zone", { name: "waktu_masuk" })
  waktuMasuk: Date;

  @Column("timestamp without time zone", {
    name: "waktu_keluar",
    nullable: true,
  })
  waktuKeluar: Date | null;

  @Column("uuid", { name: "kamar", nullable: true })
  kamar: string | null;

  @Column("uuid", { name: "bed", nullable: true })
  bed: string | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character", { name: "jenis_pulang", nullable: true, length: 1 })
  jenisPulang: string | null;

  @Column("text", { name: "alasan_pulang", nullable: true })
  alasanPulang: string | null;

  @Column("uuid", { name: "nurse_station", nullable: true })
  nurseStation: string | null;

  @Column("uuid", { name: "petugas", nullable: true })
  petugas: string | null;

  @Column("uuid", { name: "asal", nullable: true })
  asal: string | null;
}
