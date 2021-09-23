import { Column, Entity, Index } from "typeorm";

@Index("invoice_payment_retur_pkey", ["uid"], { unique: true })
@Entity("invoice_payment_retur", { schema: "public" })
export class InvoicePaymentRetur {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nomor_transaksi", length: 15 })
  nomorTransaksi: string;

  @Column("timestamp without time zone", { name: "tanggal_transaksi" })
  tanggalTransaksi: Date;

  @Column("uuid", { name: "pegawai" })
  pegawai: string;

  @Column("double precision", { name: "total", precision: 53 })
  total: number;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "invoice_payment" })
  invoicePayment: string;
}
