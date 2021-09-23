import { Column, Entity, Index } from "typeorm";

@Index("inventori_batch_pkey", ["uid"], { unique: true })
@Entity("inventori_batch", { schema: "public" })
export class InventoriBatch {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "barang" })
  barang: string;

  @Column("character varying", { name: "batch", length: 50 })
  batch: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "do_master", nullable: true })
  doMaster: string | null;

  @Column("uuid", { name: "po", nullable: true })
  po: string | null;

  @Column("date", { name: "expired_date", nullable: true })
  expiredDate: string | null;
}
