import { Column, Entity, Index } from "typeorm";

@Index("master_fis_pkey", ["uid"], { unique: true })
@Entity("master_fis", { schema: "public" })
export class MasterFis {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nama" })
  nama: string;

  @Column("text", { name: "keterangan" })
  keterangan: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
