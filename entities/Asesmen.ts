import { Column, Entity, Index } from "typeorm";

@Index("asesmen_pkey", ["uid"], { unique: true })
@Entity("asesmen", { schema: "public" })
export class Asesmen {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "poli" })
  poli: string;

  @Column("uuid", { name: "kunjungan" })
  kunjungan: string;

  @Column("uuid", { name: "antrian" })
  antrian: string;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("uuid", { name: "dokter" })
  dokter: string;

  @Column("uuid", { name: "perawat", nullable: true })
  perawat: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character", {
    name: "status",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  status: string | null;
}
