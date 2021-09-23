import { Column, Entity, Index } from "typeorm";

@Index("invoice_pkey", ["uid"], { unique: true })
@Entity("invoice", { schema: "public" })
export class Invoice {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "kunjungan" })
  kunjungan: string;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("double precision", {
    name: "total_pre_discount",
    precision: 53,
    default: () => "0",
  })
  totalPreDiscount: number;

  @Column("double precision", {
    name: "discount",
    precision: 53,
    default: () => "0",
  })
  discount: number;

  @Column("character", {
    name: "discount_type",
    length: 1,
    default: () => "'N'",
  })
  discountType: string;

  @Column("double precision", {
    name: "total_after_discount",
    precision: 53,
    default: () => "0",
  })
  totalAfterDiscount: number;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character varying", {
    name: "nomor_invoice",
    nullable: true,
    length: 50,
  })
  nomorInvoice: string | null;
}
