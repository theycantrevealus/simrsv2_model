import { Column, Entity, Index } from "typeorm";

@Index("master_loket_pkey", ["uid"], { unique: true })
@Entity("master_loket", { schema: "public" })
export class MasterLoket {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nama_loket", length: 50 })
  namaLoket: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "user_active", nullable: true })
  userActive: string | null;
}
