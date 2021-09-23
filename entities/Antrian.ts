import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasterPenjamin } from "./MasterPenjamin";

@Index("antrian_pkey", ["uid"], { unique: true })
@Entity("antrian", { schema: "public" })
export class Antrian {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("integer", { name: "no_antrian" })
  noAntrian: number;

  @Column("uuid", { name: "kunjungan" })
  kunjungan: string;

  @Column("integer", { name: "prioritas" })
  prioritas: number;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("uuid", { name: "departemen" })
  departemen: string;

  @Column("uuid", { name: "dokter" })
  dokter: string;

  @Column("timestamp without time zone", { name: "waktu_masuk" })
  waktuMasuk: Date;

  @Column("timestamp without time zone", {
    name: "waktu_keluar",
    nullable: true,
  })
  waktuKeluar: Date | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character varying", {
    name: "pj_pasien",
    nullable: true,
    length: 100,
  })
  pjPasien: string | null;

  @Column("character varying", {
    name: "info_didapat_dari",
    nullable: true,
    length: 100,
  })
  infoDidapatDari: string | null;

  @Column("integer", { name: "cara_datang", nullable: true })
  caraDatang: number | null;

  @Column("text", { name: "keterangan_cara_datang", nullable: true })
  keteranganCaraDatang: string | null;

  @Column("character", { name: "status_antrian", nullable: true, length: 1 })
  statusAntrian: string | null;

  @ManyToOne(() => MasterPenjamin, (masterPenjamin) => masterPenjamin.antrians)
  @JoinColumn([{ name: "penjamin", referencedColumnName: "uid" }])
  penjamin: MasterPenjamin;
}
