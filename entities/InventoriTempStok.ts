import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("inventori_temp_stok_pkey", ["id"], { unique: true })
@Entity("inventori_temp_stok", { schema: "public" })
export class InventoriTempStok {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "transact_table" })
  transactTable: string;

  @Column("character varying", { name: "transact_iden" })
  transactIden: string;

  @Column("uuid", { name: "gudang_asal" })
  gudangAsal: string;

  @Column("uuid", { name: "gudang_tujuan", nullable: true })
  gudangTujuan: string | null;

  @Column("uuid", { name: "barang" })
  barang: string;

  @Column("uuid", { name: "batch" })
  batch: string;

  @Column("double precision", { name: "qty", precision: 53 })
  qty: number;

  @Column("character", { name: "status", length: 1, default: () => "'P'" })
  status: string;

  @Column("timestamp without time zone", { name: "logged_at" })
  loggedAt: Date;

  @Column("text", { name: "remark", nullable: true })
  remark: string | null;

  @Column("uuid", { name: "pasca_opname", nullable: true })
  pascaOpname: string | null;

  @Column("text", { name: "strategy", nullable: true })
  strategy: string | null;

  @Column("integer", { name: "stok_log_in", nullable: true })
  stokLogIn: number | null;

  @Column("integer", { name: "stok_log_out", nullable: true })
  stokLogOut: number | null;

  @Column("uuid", { name: "pegawai" })
  pegawai: string;
}
