import { Column, Entity, Index } from "typeorm";

@Index("asesmen_medis_kulit_kelamin_pkey", ["uid"], { unique: true })
@Entity("asesmen_medis_kulit_kelamin", { schema: "public" })
export class AsesmenMedisKulitKelamin {
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

  @Column("double precision", { name: "tekanan_darah", precision: 53 })
  tekananDarah: number;

  @Column("double precision", { name: "nadi", precision: 53 })
  nadi: number;

  @Column("double precision", { name: "pernafasan", precision: 53 })
  pernafasan: number;

  @Column("double precision", { name: "berat_badan", precision: 53 })
  beratBadan: number;

  @Column("double precision", { name: "tinggi_badan", precision: 53 })
  tinggiBadan: number;

  @Column("double precision", { name: "lingkar_lengan_atas", precision: 53 })
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

  @Column("double precision", { name: "suhu", precision: 53 })
  suhu: number;

  @Column("text", { name: "icd10_kerja" })
  icd10Kerja: string;

  @Column("text", { name: "icd10_banding" })
  icd10Banding: string;
}
