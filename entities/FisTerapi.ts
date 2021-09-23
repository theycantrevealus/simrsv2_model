import { Column, Entity, Index } from "typeorm";

@Index("fis_terapi_pkey", ["uid"], { unique: true })
@Entity("fis_terapi", { schema: "public" })
export class FisTerapi {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("date", { name: "tanggal" })
  tanggal: string;

  @Column("uuid", { name: "asesmen" })
  asesmen: string;

  @Column("uuid", { name: "kunjungan" })
  kunjungan: string;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("uuid", { name: "terapis" })
  terapis: string;

  @Column("text", { name: "program" })
  program: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "dokter" })
  dokter: string;
}
