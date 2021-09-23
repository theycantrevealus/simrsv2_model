import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bpjs_claim_pkey", ["id"], { unique: true })
@Entity("bpjs_claim", { schema: "public" })
export class BpjsClaim {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "noSEP", nullable: true })
  noSep: string | null;

  @Column("date", { name: "tglMasuk", nullable: true })
  tglMasuk: string | null;

  @Column("date", { name: "tglKeluar", nullable: true })
  tglKeluar: string | null;

  @Column("character varying", { name: "jaminan", nullable: true })
  jaminan: string | null;

  @Column("character varying", { name: "poli", nullable: true })
  poli: string | null;

  @Column("character varying", { name: "ruangRawat", nullable: true })
  ruangRawat: string | null;

  @Column("character varying", { name: "kelasRawat", nullable: true })
  kelasRawat: string | null;

  @Column("character varying", { name: "spesialistik", nullable: true })
  spesialistik: string | null;

  @Column("character varying", { name: "caraKeluar", nullable: true })
  caraKeluar: string | null;

  @Column("character varying", { name: "kondisiPulang", nullable: true })
  kondisiPulang: string | null;

  @Column("text", { name: "diagnosa", nullable: true })
  diagnosa: string | null;

  @Column("text", { name: "procedure", nullable: true })
  procedure: string | null;

  @Column("character varying", { name: "tindakLanjut", nullable: true })
  tindakLanjut: string | null;

  @Column("character varying", { name: "dirujukKe_kodePPK", nullable: true })
  dirujukKeKodePpk: string | null;

  @Column("date", { name: "kontrolKembali_tanggal", nullable: true })
  kontrolKembaliTanggal: string | null;

  @Column("character varying", { name: "kontrolKembali_poli", nullable: true })
  kontrolKembaliPoli: string | null;

  @Column("character varying", { name: "dpjp", nullable: true })
  dpjp: string | null;

  @Column("character varying", { name: "user", nullable: true })
  user: string | null;

  @Column("uuid", { name: "pegawai", nullable: true })
  pegawai: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
