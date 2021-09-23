import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("penjamin_sep_pkey", ["id"], { unique: true })
@Entity("peserta_bpjs", { schema: "public" })
export class PesertaBpjs {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "kunjungan" })
  kunjungan: string;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("uuid", { name: "pegawai" })
  pegawai: string;

  @Column("character varying", { name: "nomor_sep", length: 20 })
  nomorSep: string;

  @Column("character varying", {
    name: "asuransi_no",
    nullable: true,
    length: 20,
  })
  asuransiNo: string | null;

  @Column("character varying", {
    name: "asuransi_nm_asuransi",
    nullable: true,
    length: 50,
  })
  asuransiNmAsuransi: string | null;

  @Column("date", { name: "asuransi_tgl_tat", nullable: true })
  asuransiTglTat: string | null;

  @Column("date", { name: "asuransi_tgl_tmt", nullable: true })
  asuransiTglTmt: string | null;

  @Column("integer", { name: "hak_kelas_kode", nullable: true })
  hakKelasKode: number | null;

  @Column("character varying", {
    name: "hak_kelas_keterangan",
    nullable: true,
    length: 20,
  })
  hakKelasKeterangan: string | null;

  @Column("character varying", {
    name: "informasi_dinsos",
    nullable: true,
    length: 50,
  })
  informasiDinsos: string | null;

  @Column("character varying", {
    name: "informasi_no_sktm",
    nullable: true,
    length: 20,
  })
  informasiNoSktm: string | null;

  @Column("character varying", {
    name: "informasi_prolanis_prb",
    nullable: true,
    length: 50,
  })
  informasiProlanisPrb: string | null;

  @Column("integer", { name: "jenis_peserta_kode", nullable: true })
  jenisPesertaKode: number | null;

  @Column("character varying", {
    name: "jenis_peserta_keterangan",
    nullable: true,
    length: 50,
  })
  jenisPesertaKeterangan: string | null;

  @Column("character varying", { name: "mr_no", nullable: true, length: 20 })
  mrNo: string | null;

  @Column("character varying", {
    name: "mr_no_telepon",
    nullable: true,
    length: 20,
  })
  mrNoTelepon: string | null;

  @Column("character varying", { name: "no_kartu", nullable: true, length: 20 })
  noKartu: string | null;

  @Column("integer", { name: "pisa", nullable: true })
  pisa: number | null;

  @Column("integer", { name: "prov_umum_kd_provider", nullable: true })
  provUmumKdProvider: number | null;

  @Column("character varying", {
    name: "prov_umum_nm_provider",
    nullable: true,
    length: 20,
  })
  provUmumNmProvider: string | null;

  @Column("integer", { name: "status_peserta_kode", nullable: true })
  statusPesertaKode: number | null;

  @Column("character varying", {
    name: "status_peserta_keterangan",
    nullable: true,
    length: 20,
  })
  statusPesertaKeterangan: string | null;

  @Column("date", { name: "tgl_cetak_kartu", nullable: true })
  tglCetakKartu: string | null;

  @Column("date", { name: "tgl_tat", nullable: true })
  tglTat: string | null;

  @Column("character varying", {
    name: "umur_saat_pelayanan",
    nullable: true,
    length: 80,
  })
  umurSaatPelayanan: string | null;

  @Column("character varying", {
    name: "umur_sekarang",
    nullable: true,
    length: 80,
  })
  umurSekarang: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
