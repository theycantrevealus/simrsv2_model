import { Column, Entity, Index } from "typeorm";

@Index("radiologi_order_pkey", ["uid"], { unique: true })
@Entity("rad_order", { schema: "public" })
export class RadOrder {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "asesmen" })
  asesmen: string;

  @Column("timestamp without time zone", { name: "waktu_order" })
  waktuOrder: Date;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("boolean", { name: "selesai", default: () => "false" })
  selesai: boolean;

  @Column("uuid", { name: "petugas", nullable: true })
  petugas: string | null;

  @Column("character varying", { name: "status", nullable: true, length: 1 })
  status: string | null;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("uuid", { name: "kunjungan" })
  kunjungan: string;

  @Column("character varying", { name: "no_order", nullable: true, length: 20 })
  noOrder: string | null;

  @Column("uuid", { name: "dokter_radio", nullable: true })
  dokterRadio: string | null;
}
