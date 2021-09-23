import { Column, Entity, Index } from "typeorm";

@Index("antrian_jenis_pkey", ["uid"], { unique: true })
@Entity("antrian_jenis", { schema: "public" })
export class AntrianJenis {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nama", length: 50 })
  nama: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character varying", { name: "kode", nullable: true, length: 10 })
  kode: string | null;

  @Column("text", { name: "allow_jalur", nullable: true })
  allowJalur: string | null;
}
