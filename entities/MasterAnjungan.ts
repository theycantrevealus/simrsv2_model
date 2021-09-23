import { Column, Entity, Index } from "typeorm";

@Index("master_anjungan_pkey", ["uid"], { unique: true })
@Entity("master_anjungan", { schema: "public" })
export class MasterAnjungan {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "kode_anjungan", length: 10 })
  kodeAnjungan: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
