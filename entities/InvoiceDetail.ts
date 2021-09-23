import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("invoice_detail_pkey", ["id"], { unique: true })
@Entity("invoice_detail", { schema: "public" })
export class InvoiceDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "invoice" })
  invoice: string;

  @Column("uuid", { name: "item" })
  item: string;

  @Column("character varying", { name: "item_type", length: 80 })
  itemType: string;

  @Column("double precision", { name: "qty", precision: 53 })
  qty: number;

  @Column("double precision", { name: "harga", precision: 53 })
  harga: number;

  @Column("double precision", { name: "subtotal", precision: 53 })
  subtotal: number;

  @Column("double precision", { name: "discount", precision: 53 })
  discount: number;

  @Column("character", {
    name: "discount_type",
    length: 1,
    default: () => "'N'",
  })
  discountType: string;

  @Column("text", { name: "keterangan" })
  keterangan: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character", {
    name: "status_bayar",
    length: 1,
    default: () => "'N'",
  })
  statusBayar: string;

  @Column("uuid", { name: "penjamin" })
  penjamin: string;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("uuid", { name: "mitra", nullable: true })
  mitra: string | null;

  @Column("character varying", { name: "billing_group", nullable: true })
  billingGroup: string | null;

  @Column("uuid", { name: "departemen", nullable: true })
  departemen: string | null;
}
