import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasterInvGudang } from "./MasterInvGudang";
import { MasterSupplier } from "./MasterSupplier";

@Index("do_master_pkey", ["uid"], { unique: true })
@Entity("inventori_do", { schema: "public" })
export class InventoriDo {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("date", { name: "tgl_do", nullable: true })
  tglDo: string | null;

  @Column("character varying", { name: "no_do", nullable: true })
  noDo: string | null;

  @Column("character varying", { name: "no_invoice", nullable: true })
  noInvoice: string | null;

  @Column("date", { name: "tgl_invoice", nullable: true })
  tglInvoice: string | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("character varying", { name: "status", nullable: true })
  status: string | null;

  @Column("uuid", { name: "pegawai" })
  pegawai: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "po", nullable: true })
  po: string | null;

  @ManyToOne(
    () => MasterInvGudang,
    (masterInvGudang) => masterInvGudang.inventoriDos
  )
  @JoinColumn([{ name: "gudang", referencedColumnName: "uid" }])
  gudang: MasterInvGudang;

  @ManyToOne(
    () => MasterSupplier,
    (masterSupplier) => masterSupplier.inventoriDos
  )
  @JoinColumn([{ name: "supplier", referencedColumnName: "uid" }])
  supplier: MasterSupplier;
}
