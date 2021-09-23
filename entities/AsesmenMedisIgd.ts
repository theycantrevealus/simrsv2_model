import { Column, Entity, Index } from "typeorm";

@Index("asesmen_medis_igd_pkey", ["uid"], { unique: true })
@Entity("asesmen_medis_igd", { schema: "public" })
export class AsesmenMedisIgd {
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

  @Column("text", { name: "keluhan_utama" })
  keluhanUtama: string;

  @Column("text", { name: "keluhan_tambahan" })
  keluhanTambahan: string;

  @Column("double precision", { name: "tekanan_darah"})
  tekananDarah: number;

  @Column("double precision", { name: "nadi"})
  nadi: number;

  @Column("double precision", { name: "pernafasan"})
  pernafasan: number;

  @Column("double precision", { name: "berat_badan"})
  beratBadan: number;

  @Column("double precision", { name: "tinggi_badan"})
  tinggiBadan: number;

  @Column("double precision", { name: "lingkar_lengan_atas"})
  lingkarLenganAtas: number;

  @Column("text", { name: "pemeriksaan_fisik" })
  pemeriksaanFisik: string;

  @Column("text", { name: "diagnosa_kerja" })
  diagnosaKerja: string;

  @Column("text", { name: "diagnosa_banding" })
  diagnosaBanding: string;

  @Column("text", { name: "planning" })
  planning: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "asesmen" })
  asesmen: string;

  @Column("double precision", { name: "suhu"})
  suhu: number;

  @Column("text", { name: "icd10_kerja" })
  icd10Kerja: string;

  @Column("text", { name: "icd10_banding" })
  icd10Banding: string;

  @Column("character varying", { name: "gcs_e", nullable: true, length: 50 })
  gcsE: string | null;

  @Column("character varying", { name: "gcs_v", nullable: true, length: 50 })
  gcsV: string | null;

  @Column("character varying", { name: "gcs_m", nullable: true, length: 50 })
  gcsM: string | null;

  @Column("character varying", { name: "gcs_tot", nullable: true, length: 50 })
  gcsTot: string | null;

  @Column("character varying", {
    name: "status_alergi",
    nullable: true,
    length: 50,
  })
  statusAlergi: string | null;

  @Column("character varying", {
    name: "status_alergi_text",
    nullable: true,
    length: 100,
  })
  statusAlergiText: string | null;

  @Column("character varying", {
    name: "refleks_cahaya",
    nullable: true,
    length: 50,
  })
  refleksCahaya: string | null;

  @Column("character varying", { name: "rr", nullable: true, length: 50 })
  rr: string | null;

  @Column("character varying", {
    name: "gangguan_perilaku",
    nullable: true,
    length: 50,
  })
  gangguanPerilaku: string | null;

  @Column("character varying", {
    name: "gangguan_terganggu",
    nullable: true,
    length: 50,
  })
  gangguanTerganggu: string | null;

  @Column("character varying", {
    name: "skala_nyeri",
    nullable: true,
    length: 50,
  })
  skalaNyeri: string | null;

  @Column("character varying", { name: "lokasi", nullable: true, length: 50 })
  lokasi: string | null;

  @Column("character varying", {
    name: "frekuensi",
    nullable: true,
    length: 50,
  })
  frekuensi: string | null;

  @Column("character varying", {
    name: "karakter_nyeri",
    nullable: true,
    length: 50,
  })
  karakterNyeri: string | null;

  @Column("character varying", {
    name: "karakter_nyeri_text",
    nullable: true,
    length: 50,
  })
  karakterNyeriText: string | null;

  @Column("character varying", {
    name: "skor_nyeri",
    nullable: true,
    length: 50,
  })
  skorNyeri: string | null;

  @Column("character varying", {
    name: "tipe_nyeri",
    nullable: true,
    length: 50,
  })
  tipeNyeri: string | null;

  @Column("text", { name: "ats_list", nullable: true })
  atsList: string | null;

  @Column("character varying", {
    name: "ats_skala",
    nullable: true,
    length: 50,
  })
  atsSkala: string | null;

  @Column("text", { name: "ekg", nullable: true })
  ekg: string | null;

  @Column("text", { name: "saved_lokalis_item", nullable: true })
  savedLokalisItem: string | null;

  @Column("character varying", { name: "pupil", nullable: true, length: 50 })
  pupil: string | null;

  @Column("integer", { name: "skala_rasa_sakit", nullable: true })
  skalaRasaSakit: number | null;
}
