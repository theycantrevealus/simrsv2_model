import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("inventori_stok_log_pkey", ["id"], { unique: true })
@Entity("inventori_stok_log", { schema: "public" })
export class InventoriStokLog {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "barang" })
  barang: string;

  @Column("uuid", { name: "batch" })
  batch: string;

  @Column("uuid", { name: "gudang" })
  gudang: string;

  @Column("double precision", { name: "masuk", precision: 53 })
  masuk: number;

  @Column("double precision", { name: "keluar", precision: 53 })
  keluar: number;

  @Column("double precision", { name: "saldo", precision: 53 })
  saldo: number;

  @Column("integer", { name: "type", nullable: true, default: () => "0" })
  type: number | null;

  @Column("timestamp without time zone", {
    name: "logged_at",
    nullable: true,
    default: () => "now()",
  })
  loggedAt: Date | null;

  @Column("character varying", {
    name: "jenis_transaksi",
    nullable: true,
    length: 50,
  })
  jenisTransaksi: string | null;

  @Column("uuid", { name: "uid_foreign", nullable: true })
  uidForeign: string | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;
}
