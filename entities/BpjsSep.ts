import { Column, Entity, Index } from "typeorm";

@Index("bpjs_sep_pkey", ["uid"], { unique: true })
@Entity("bpjs_sep", { schema: "public" })
export class BpjsSep {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "pelayanan_jenis", length: 10 })
  pelayananJenis: string;

  @Column("character varying", { name: "kelas_rawat", length: 10 })
  kelasRawat: string;

  @Column("character varying", {
    name: "asal_rujukan_jenis",
    nullable: true,
    length: 20,
  })
  asalRujukanJenis: string | null;

  @Column("date", { name: "asal_rujukan_tanggal", nullable: true })
  asalRujukanTanggal: string | null;

  @Column("character varying", {
    name: "asal_rujukan_nomor",
    nullable: true,
    length: 30,
  })
  asalRujukanNomor: string | null;

  @Column("character varying", {
    name: "asal_rujukan_ppk",
    nullable: true,
    length: 20,
  })
  asalRujukanPpk: string | null;

  @Column("text", { name: "catatan", nullable: true })
  catatan: string | null;

  @Column("character varying", {
    name: "diagnosa_kode",
    nullable: true,
    length: 10,
  })
  diagnosaKode: string | null;

  @Column("text", { name: "diagnosa_nama", nullable: true })
  diagnosaNama: string | null;

  @Column("character varying", {
    name: "poli_tujuan",
    nullable: true,
    length: 30,
  })
  poliTujuan: string | null;

  @Column("character", { name: "poli_eksekutif", nullable: true, length: 1 })
  poliEksekutif: string | null;

  @Column("character", { name: "pasien_cob", nullable: true, length: 1 })
  pasienCob: string | null;

  @Column("character", { name: "pasien_katarak", nullable: true, length: 1 })
  pasienKatarak: string | null;

  @Column("character", { name: "laka_lantas", nullable: true, length: 1 })
  lakaLantas: string | null;

  @Column("text", { name: "laka_lantas_penjamin", nullable: true })
  lakaLantasPenjamin: string | null;

  @Column("date", { name: "laka_lantas_tanggal", nullable: true })
  lakaLantasTanggal: string | null;

  @Column("text", { name: "laka_lantas_keterangan", nullable: true })
  lakaLantasKeterangan: string | null;

  @Column("character", {
    name: "laka_lantas_suplesi",
    nullable: true,
    length: 1,
  })
  lakaLantasSuplesi: string | null;

  @Column("character varying", {
    name: "laka_lantas_suplesi_sep",
    nullable: true,
    length: 20,
  })
  lakaLantasSuplesiSep: string | null;

  @Column("character", {
    name: "laka_lantas_provinsi",
    nullable: true,
    length: 15,
  })
  lakaLantasProvinsi: string | null;

  @Column("character", {
    name: "laka_lantas_kabupaten",
    nullable: true,
    length: 15,
  })
  lakaLantasKabupaten: string | null;

  @Column("character", {
    name: "laka_lantas_kecamatan",
    nullable: true,
    length: 15,
  })
  lakaLantasKecamatan: string | null;

  @Column("character varying", {
    name: "skdp_no_surat",
    nullable: true,
    length: 50,
  })
  skdpNoSurat: string | null;

  @Column("character varying", {
    name: "skdp_dpjp",
    nullable: true,
    length: 15,
  })
  skdpDpjp: string | null;

  @Column("character varying", { name: "no_telp", nullable: true, length: 15 })
  noTelp: string | null;

  @Column("uuid", { name: "pegawai", nullable: true })
  pegawai: string | null;

  @Column("character varying", { name: "sep_no", nullable: true, length: 30 })
  sepNo: string | null;

  @Column("date", { name: "sep_tanggal", nullable: true })
  sepTanggal: string | null;

  @Column("character varying", {
    name: "sep_dinsos",
    nullable: true,
    length: 30,
  })
  sepDinsos: string | null;

  @Column("character varying", {
    name: "sep_prolanis",
    nullable: true,
    length: 30,
  })
  sepProlanis: string | null;

  @Column("character varying", { name: "sep_sktm", nullable: true, length: 30 })
  sepSktm: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character varying", {
    name: "asal_rujukan_nama",
    nullable: true,
    length: 80,
  })
  asalRujukanNama: string | null;

  @Column("uuid", { name: "pasien", nullable: true })
  pasien: string | null;

  @Column("uuid", { name: "antrian", nullable: true })
  antrian: string | null;

  @Column("date", { name: "sep_selesai", nullable: true })
  sepSelesai: string | null;

  @Column("character varying", { name: "spesialistik_kode", nullable: true })
  spesialistikKode: string | null;

  @Column("character varying", { name: "spesialistik_nama", nullable: true })
  spesialistikNama: string | null;

  @Column("character varying", { name: "skdp_dpjp_nama", nullable: true })
  skdpDpjpNama: string | null;
}
