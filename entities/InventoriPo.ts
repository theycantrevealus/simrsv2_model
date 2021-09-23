import { Column, Entity, Index } from "typeorm";

@Index("inventori_po_pkey", ["uid"], { unique: true })
@Entity("inventori_po", { schema: "public" })
export class InventoriPo {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "supplier", nullable: true })
  supplier: string | null;

  @Column("uuid", { name: "pegawai" })
  pegawai: string;

  @Column("double precision", { name: "total"})
  total: number;

  @Column("double precision", { name: "disc"})
  disc: number;

  @Column("character", { name: "disc_type", length: 1 })
  discType: string;

  @Column("double precision", { name: "total_after_disc"})
  totalAfterDisc: number;

  @Column("timestamp without time zone", { name: "tanggal_po" })
  tanggalPo: Date;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("character varying", { name: "nomor_po", length: 50 })
  nomorPo: string;

  @Column("character", { name: "status", nullable: true, length: 1 })
  status: string | null;
}
