import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("antrian_nomor_pkey", ["id"], { unique: true })
@Entity("antrian_nomor", { schema: "public" })
export class AntrianNomor {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nomor_urut", length: 15 })
  nomorUrut: string;

  @Column("uuid", { name: "loket", nullable: true })
  loket: string | null;

  @Column("uuid", { name: "pegawai", nullable: true })
  pegawai: string | null;

  @Column("uuid", { name: "kunjungan", nullable: true })
  kunjungan: string | null;

  @Column("uuid", { name: "antrian", nullable: true })
  antrian: string | null;

  @Column("uuid", { name: "pasien", nullable: true })
  pasien: string | null;

  @Column("uuid", { name: "poli", nullable: true })
  poli: string | null;

  @Column("character", { name: "status", nullable: true, length: 1 })
  status: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("uuid", { name: "anjungan", nullable: true })
  anjungan: string | null;

  @Column("uuid", { name: "jenis_antrian" })
  jenisAntrian: string;

  @Column("uuid", { name: "dokter", nullable: true })
  dokter: string | null;

  @Column("uuid", { name: "penjamin", nullable: true })
  penjamin: string | null;

  @Column("integer", { name: "prioritas", nullable: true, default: () => "0" })
  prioritas: number | null;
}
