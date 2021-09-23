import { Column, Entity, Index } from "typeorm";

@Index("kamar_operasi_jenis_operasi_pkey", ["uid"], { unique: true })
@Entity("kamar_operasi_jenis_operasi", { schema: "public" })
export class KamarOperasiJenisOperasi {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nama" })
  nama: string;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("time without time zone", { name: "created_at" })
  createdAt: string;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
