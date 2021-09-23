import { Column, Entity, Index } from "typeorm";

@Index("master_lab_jenis_pkey", ["uid"], { unique: true })
@Entity("master_tindakan_jenis", { schema: "public" })
export class MasterTindakanJenis {
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
}
