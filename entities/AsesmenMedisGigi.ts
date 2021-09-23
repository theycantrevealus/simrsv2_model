import { Column, Entity, Index } from "typeorm";

@Index("asesmen_medis_gigi_pkey", ["uid"], { unique: true })
@Entity("asesmen_medis_gigi", { schema: "public" })
export class AsesmenMedisGigi {
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

  @Column("text", { name: "odontogram", nullable: true })
  odontogram: string | null;

  @Column("character", { name: "muka_simetris", nullable: true, length: 1 })
  mukaSimetris: string | null;

  @Column("character", { name: "tmj", nullable: true, length: 1 })
  tmj: string | null;

  @Column("character", { name: "bibir", nullable: true, length: 1 })
  bibir: string | null;

  @Column("character", { name: "lidah", nullable: true, length: 1 })
  lidah: string | null;

  @Column("character", { name: "mukosa", nullable: true, length: 1 })
  mukosa: string | null;

  @Column("character", { name: "torus", nullable: true, length: 1 })
  torus: string | null;

  @Column("character", { name: "gingiva", nullable: true, length: 1 })
  gingiva: string | null;

  @Column("character", { name: "frenulum", nullable: true, length: 1 })
  frenulum: string | null;

  @Column("character", { name: "kebersihan_mulut", nullable: true, length: 1 })
  kebersihanMulut: string | null;

  @Column("text", { name: "keterangan_bibir", nullable: true })
  keteranganBibir: string | null;

  @Column("text", { name: "keterangan_lidah", nullable: true })
  keteranganLidah: string | null;

  @Column("text", { name: "keterangan_mukosa", nullable: true })
  keteranganMukosa: string | null;

  @Column("text", { name: "keterangan_torus", nullable: true })
  keteranganTorus: string | null;

  @Column("text", { name: "keterangan_gingiva", nullable: true })
  keteranganGingiva: string | null;

  @Column("text", { name: "keterangan_frenulum", nullable: true })
  keteranganFrenulum: string | null;
}
