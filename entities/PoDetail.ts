import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("po_detail_pkey", ["id"], { unique: true })
@Entity("po_detail", { schema: "public" })
export class PoDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "po_master" })
  poMaster: string;

  @Column("uuid", { name: "item" })
  item: string;

  @Column("double precision", { name: "qty"})
  qty: number;

  @Column("double precision", { name: "price"})
  price: number;

  @Column("double precision", { name: "discount"})
  discount: number;

  @Column("character", { name: "discount_type", length: 1 })
  discountType: string;

  @Column("double precision", { name: "total"})
  total: number;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;
}
