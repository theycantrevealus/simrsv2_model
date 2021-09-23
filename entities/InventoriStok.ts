import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("inventori_stok_pkey", ["id"], { unique: true })
@Entity("inventori_stok", { schema: "public" })
export class InventoriStok {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "barang" })
  barang: string;

  @Column("uuid", { name: "batch" })
  batch: string;

  @Column("uuid", { name: "gudang" })
  gudang: string;

  @Column("double precision", { name: "stok_terkini", precision: 53 })
  stokTerkini: number;
}
