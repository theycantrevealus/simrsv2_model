import { Column, Entity, Index } from "typeorm";

@Index("lab_order_pkey", ["uid"], { unique: true })
@Entity("lab_order", { schema: "public" })
export class LabOrder {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "asesmen" })
  asesmen: string;

  @Column("timestamp without time zone", { name: "waktu_order" })
  waktuOrder: Date;

  @Column("boolean", { name: "selesai" })
  selesai: boolean;

  @Column("uuid", { name: "dr_pengirim" })
  drPengirim: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "dr_penanggung_jawab", nullable: true })
  drPenanggungJawab: string | null;

  @Column("character varying", { name: "no_order", nullable: true, length: 20 })
  noOrder: string | null;

  @Column("character varying", { name: "status", nullable: true, length: 2 })
  status: string | null;

  @Column("uuid", { name: "pasien", nullable: true })
  pasien: string | null;

  @Column("uuid", { name: "kunjungan", nullable: true })
  kunjungan: string | null;

  @Column("text", { name: "kesan", nullable: true })
  kesan: string | null;

  @Column("text", { name: "anjuran", nullable: true })
  anjuran: string | null;

  @Column("character varying", { name: "tanggal_sampling", nullable: true })
  tanggalSampling: string | null;
}
