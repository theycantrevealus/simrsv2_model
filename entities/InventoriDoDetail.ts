import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("inventori_do_detail_pkey", ["id"], { unique: true })
@Entity("inventori_do_detail", { schema: "public" })
export class InventoriDoDetail {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("uuid", { name: "do_master" })
  doMaster: string;

  @Column("uuid", { name: "barang" })
  barang: string;

  @Column("date", { name: "kadaluarsa", nullable: true })
  kadaluarsa: string | null;

  @Column("double precision", { name: "qty", nullable: true, precision: 53 })
  qty: number | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "batch", nullable: true })
  batch: string | null;

  @Column("uuid", { name: "po", nullable: true })
  po: string | null;
}
