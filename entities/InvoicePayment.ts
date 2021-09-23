import { Column, Entity, Index } from "typeorm";

@Index("invoice_payment_pkey", ["uid"], { unique: true })
@Entity("invoice_payment", { schema: "public" })
export class InvoicePayment {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "invoice" })
  invoice: string;

  @Column("uuid", { name: "pegawai" })
  pegawai: string;

  @Column("double precision", { name: "terbayar"})
  terbayar: number;

  @Column("double precision", { name: "sisa_bayar"})
  sisaBayar: number;

  @Column("text", { name: "keterangan" })
  keterangan: string;

  @Column("character varying", { name: "metode_bayar", length: 10 })
  metodeBayar: string;

  @Column("date", { name: "tanggal_bayar" })
  tanggalBayar: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character varying", {
    name: "nomor_kwitansi",
    nullable: true,
    length: 20,
  })
  nomorKwitansi: string | null;

  @Column("uuid", { name: "pasien", nullable: true })
  pasien: string | null;
}
