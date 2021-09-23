import { Column, Entity, Index } from "typeorm";

@Index("po_master_pkey", ["uid"], { unique: true })
@Entity("po_master", { schema: "public" })
export class PoMaster {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "nomor_po" })
  nomorPo: string;

  @Column("timestamp without time zone", { name: "tanggal_po" })
  tanggalPo: Date;

  @Column("uuid", { name: "supplier" })
  supplier: string;

  @Column("uuid", { name: "pegawai" })
  pegawai: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("double precision", { name: "discount", precision: 53 })
  discount: number;

  @Column("character", { name: "discount_type", length: 1 })
  discountType: string;

  @Column("double precision", { name: "total", precision: 53 })
  total: number;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;
}
