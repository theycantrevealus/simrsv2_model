import { Column, Entity, Index } from "typeorm";

@Index("asesmen_medis_mata_pkey", ["uid"], { unique: true })
@Entity("asesmen_medis_mata", { schema: "public" })
export class AsesmenMedisMata {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "kunjungan" })
  kunjungan: string;

  @Column("uuid", { name: "antrian" })
  antrian: string;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("uuid", { name: "dokter" })
  dokter: string;

  @Column("text", { name: "keluhan_utama", nullable: true })
  keluhanUtama: string | null;

  @Column("text", { name: "keluhan_tambahan", nullable: true })
  keluhanTambahan: string | null;

  @Column("double precision", {
    name: "tekanan_darah",
    nullable: true,
    precision: 53,
  })
  tekananDarah: number | null;

  @Column("double precision", { name: "nadi", nullable: true})
  nadi: number | null;

  @Column("double precision", {
    name: "pernafasan",
    nullable: true,
    precision: 53,
  })
  pernafasan: number | null;

  @Column("double precision", {
    name: "berat_badan",
    nullable: true,
    precision: 53,
  })
  beratBadan: number | null;

  @Column("double precision", {
    name: "tinggi_badan",
    nullable: true,
    precision: 53,
  })
  tinggiBadan: number | null;

  @Column("double precision", {
    name: "lingkar_lengan_atas",
    nullable: true,
    precision: 53,
  })
  lingkarLenganAtas: number | null;

  @Column("text", { name: "pemeriksaan_fisik", nullable: true })
  pemeriksaanFisik: string | null;

  @Column("text", { name: "diagnosa_kerja", nullable: true })
  diagnosaKerja: string | null;

  @Column("text", { name: "diagnosa_banding", nullable: true })
  diagnosaBanding: string | null;

  @Column("text", { name: "planning", nullable: true })
  planning: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "asesmen" })
  asesmen: string;

  @Column("double precision", { name: "suhu", nullable: true})
  suhu: number | null;

  @Column("text", { name: "icd10_kerja", nullable: true })
  icd10Kerja: string | null;

  @Column("text", { name: "icd10_banding", nullable: true })
  icd10Banding: string | null;

  @Column("text", { name: "meta_resep", nullable: true })
  metaResep: string | null;

  @Column("text", { name: "tujuan_resep", nullable: true })
  tujuanResep: string | null;
}
