import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("inventori_po_detail_pkey", ["id"], { unique: true })
@Entity("inventori_po_detail", { schema: "public" })
export class InventoriPoDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "po" })
  po: string;

  @Column("uuid", { name: "barang" })
  barang: string;

  @Column("double precision", { name: "qty"})
  qty: number;

  @Column("uuid", { name: "satuan" })
  satuan: string;

  @Column("double precision", { name: "harga"})
  harga: number;

  @Column("double precision", { name: "disc"})
  disc: number;

  @Column("character", { name: "disc_type", length: 1 })
  discType: string;

  @Column("double precision", { name: "subtotal"})
  subtotal: number;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("character", {
    name: "status",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  status: string | null;
}
