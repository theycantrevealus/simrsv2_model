import { Column, Entity, Index } from "typeorm";

@Index("inventori_stok_opname_pkey", ["uid"], { unique: true })
@Entity("inventori_stok_opname", { schema: "public" })
export class InventoriStokOpname {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("date", { name: "dari" })
  dari: string;

  @Column("date", { name: "sampai" })
  sampai: string;

  @Column("uuid", { name: "pegawai" })
  pegawai: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "gudang" })
  gudang: string;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("character varying", { name: "kode", nullable: true, length: 30 })
  kode: string | null;

  @Column("character", { name: "status", nullable: true, length: 1 })
  status: string | null;
}
