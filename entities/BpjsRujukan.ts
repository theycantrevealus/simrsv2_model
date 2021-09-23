import { Column, Entity, Index } from "typeorm";

@Index("bpjs_rujukan_pkey", ["uid"], { unique: true })
@Entity("bpjs_rujukan", { schema: "public" })
export class BpjsRujukan {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "request_rujukan" })
  requestRujukan: string;

  @Column("character varying", { name: "asal_rujukan_kode", nullable: true })
  asalRujukanKode: string | null;

  @Column("character varying", { name: "asal_rujukan_nama", nullable: true })
  asalRujukanNama: string | null;

  @Column("character varying", { name: "diagnosa_kode", nullable: true })
  diagnosaKode: string | null;

  @Column("character varying", { name: "diagnosa_nama", nullable: true })
  diagnosaNama: string | null;

  @Column("character varying", { name: "poli_tujuan_kode", nullable: true })
  poliTujuanKode: string | null;

  @Column("character varying", { name: "poli_tujuan_nama", nullable: true })
  poliTujuanNama: string | null;

  @Column("date", { name: "tgl_rujukan", nullable: true })
  tglRujukan: string | null;

  @Column("character varying", { name: "tujuan_rujukan_kode", nullable: true })
  tujuanRujukanKode: string | null;

  @Column("character varying", { name: "tujuan_rujukan_nama", nullable: true })
  tujuanRujukanNama: string | null;

  @Column("text", { name: "catatan", nullable: true })
  catatan: string | null;

  @Column("uuid", { name: "sep" })
  sep: string;

  @Column("uuid", { name: "pegawai" })
  pegawai: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("text", { name: "keluhan", nullable: true })
  keluhan: string | null;

  @Column("character varying", { name: "no_kunjungan", nullable: true })
  noKunjungan: string | null;

  @Column("character varying", { name: "pelayanan_kode", nullable: true })
  pelayananKode: string | null;

  @Column("character varying", { name: "pelayanan_nama", nullable: true })
  pelayananNama: string | null;

  @Column("character varying", {
    name: "peserta_cob_no_asuransi",
    nullable: true,
  })
  pesertaCobNoAsuransi: string | null;

  @Column("character varying", {
    name: "peserta_cob_tanggal_tat",
    nullable: true,
  })
  pesertaCobTanggalTat: string | null;

  @Column("character varying", {
    name: "peserta_cob_tanggal_tmt",
    nullable: true,
  })
  pesertaCobTanggalTmt: string | null;

  @Column("text", { name: "peserta_hak_kelas_keterangan", nullable: true })
  pesertaHakKelasKeterangan: string | null;

  @Column("character varying", {
    name: "peserta_hak_kelas_kode",
    nullable: true,
  })
  pesertaHakKelasKode: string | null;

  @Column("character varying", {
    name: "peserta_informasi_dinsos",
    nullable: true,
  })
  pesertaInformasiDinsos: string | null;

  @Column("character varying", {
    name: "peserta_informasi_no_sktm",
    nullable: true,
  })
  pesertaInformasiNoSktm: string | null;

  @Column("character varying", {
    name: "peserta_informasi_prolanis_prb",
    nullable: true,
  })
  pesertaInformasiProlanisPrb: string | null;

  @Column("text", { name: "peserta_jenis_peserta_keterangan", nullable: true })
  pesertaJenisPesertaKeterangan: string | null;

  @Column("character varying", {
    name: "peserta_jenis_peserta_kode",
    nullable: true,
  })
  pesertaJenisPesertaKode: string | null;

  @Column("character varying", { name: "peserta_mr_no", nullable: true })
  pesertaMrNo: string | null;

  @Column("character varying", { name: "peserta_mr_no_telp", nullable: true })
  pesertaMrNoTelp: string | null;

  @Column("character varying", { name: "peserta_nama", nullable: true })
  pesertaNama: string | null;

  @Column("character varying", { name: "peserta_nik", nullable: true })
  pesertaNik: string | null;

  @Column("character varying", { name: "peserta_no_kartu", nullable: true })
  pesertaNoKartu: string | null;

  @Column("character varying", { name: "peserta_mr_pisa", nullable: true })
  pesertaMrPisa: string | null;

  @Column("character varying", {
    name: "peserta_mr_prov_umum_provider_kode",
    nullable: true,
  })
  pesertaMrProvUmumProviderKode: string | null;

  @Column("character varying", {
    name: "peserta_mr_prov_umum_provider_nama",
    nullable: true,
  })
  pesertaMrProvUmumProviderNama: string | null;

  @Column("character varying", { name: "peserta_sex", nullable: true })
  pesertaSex: string | null;

  @Column("character varying", {
    name: "peserta_status_peserta_keterangan",
    nullable: true,
  })
  pesertaStatusPesertaKeterangan: string | null;

  @Column("character varying", {
    name: "peserta_status_peserta_kode",
    nullable: true,
  })
  pesertaStatusPesertaKode: string | null;

  @Column("character varying", {
    name: "peserta_tanggal_cetak_kartu",
    nullable: true,
  })
  pesertaTanggalCetakKartu: string | null;

  @Column("character varying", {
    name: "peserta_tanggal_lahir",
    nullable: true,
  })
  pesertaTanggalLahir: string | null;

  @Column("character varying", { name: "peserta_tanggal_tat", nullable: true })
  pesertaTanggalTat: string | null;

  @Column("character varying", { name: "peserta_tanggal_tmt", nullable: true })
  pesertaTanggalTmt: string | null;

  @Column("character varying", {
    name: "peserta_umur_pelayanan",
    nullable: true,
  })
  pesertaUmurPelayanan: string | null;

  @Column("character varying", {
    name: "peserta_umur_sekarang",
    nullable: true,
  })
  pesertaUmurSekarang: string | null;

  @Column("character varying", {
    name: "peserta_cob_nama_asuransi",
    nullable: true,
  })
  pesertaCobNamaAsuransi: string | null;

  @Column("uuid", { name: "pasien", nullable: true })
  pasien: string | null;

  @Column("integer", { name: "jenis_faskes", nullable: true })
  jenisFaskes: number | null;

  @Column("character varying", { name: "jenis_faskes_nama", nullable: true })
  jenisFaskesNama: string | null;

  @Column("character varying", { name: "no_rujukan", nullable: true })
  noRujukan: string | null;

  @Column("character varying", { name: "tipe_rujukan", nullable: true })
  tipeRujukan: string | null;
}
