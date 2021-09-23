import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("invoice_payment_retur_detail_pkey", ["id"], { unique: true })
@Entity("invoice_payment_retur_detail", { schema: "public" })
export class InvoicePaymentReturDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "invoice_payment" })
  invoicePayment: string;

  @Column("uuid", { name: "item" })
  item: string;

  @Column("character varying", { name: "item_type", length: 30 })
  itemType: string;

  @Column("double precision", { name: "qty", precision: 53 })
  qty: number;

  @Column("double precision", { name: "harga", precision: 53 })
  harga: number;

  @Column("text", { name: "keterangan" })
  keterangan: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
