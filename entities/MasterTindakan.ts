import { Column, Entity, Index } from "typeorm";

@Index("master_tindakan_pkey", ["uid"], { unique: true })
@Entity("master_tindakan", { schema: "public" })
export class MasterTindakan {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nama" })
  nama: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character", { name: "kelompok", nullable: true, length: 3 })
  kelompok: string | null;

  @Column("uuid", { name: "jenis", nullable: true })
  jenis: string | null;
}
