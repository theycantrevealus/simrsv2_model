import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("penjamin_sep_pkey1", ["id"], { unique: true })
@Entity("penjamin_sep", { schema: "public" })
export class PenjaminSep {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "pegawai" })
  pegawai: string;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("text", { name: "bpjs_catatan", nullable: true })
  bpjsCatatan: string | null;

  @Column("text", { name: "bpjs_diagnosa", nullable: true })
  bpjsDiagnosa: string | null;

  @Column("character varying", {
    name: "bpjs_jns_pelayanan",
    nullable: true,
    length: 50,
  })
  bpjsJnsPelayanan: string | null;

  @Column("integer", { name: "bpjs_kelas_rawat", nullable: true })
  bpjsKelasRawat: number | null;

  @Column("character varying", { name: "bpjs_no_sep", length: 50 })
  bpjsNoSep: string;

  @Column("character varying", {
    name: "bpjs_no_rujukan",
    nullable: true,
    length: 50,
  })
  bpjsNoRujukan: string | null;

  @Column("character varying", {
    name: "bpjs_penjamin",
    nullable: true,
    length: 50,
  })
  bpjsPenjamin: string | null;

  @Column("character varying", {
    name: "peserta_asuransi",
    nullable: true,
    length: 50,
  })
  pesertaAsuransi: string | null;

  @Column("character varying", {
    name: "peserta_hak_kelas",
    nullable: true,
    length: 50,
  })
  pesertaHakKelas: string | null;

  @Column("character varying", {
    name: "peserta_jns_peserta",
    nullable: true,
    length: 50,
  })
  pesertaJnsPeserta: string | null;

  @Column("character", { name: "peserta_kelamin", nullable: true, length: 1 })
  pesertaKelamin: string | null;

  @Column("character varying", {
    name: "peserta_nama",
    nullable: true,
    length: 80,
  })
  pesertaNama: string | null;

  @Column("character varying", {
    name: "peserta_no_kartu",
    nullable: true,
    length: 50,
  })
  pesertaNoKartu: string | null;

  @Column("character varying", {
    name: "peserta_no_mr",
    nullable: true,
    length: 50,
  })
  pesertaNoMr: string | null;

  @Column("date", { name: "peserta_tgl_lahir", nullable: true })
  pesertaTglLahir: string | null;

  @Column("character varying", {
    name: "bpjs_poli",
    nullable: true,
    length: 50,
  })
  bpjsPoli: string | null;

  @Column("integer", { name: "bpjs_poli_eksekutif", nullable: true })
  bpjsPoliEksekutif: number | null;

  @Column("date", { name: "bpjs_tgl_sep", nullable: true })
  bpjsTglSep: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;
}
