import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("inventori_stok_opname_detail_pkey", ["id"], { unique: true })
@Entity("inventori_stok_opname_detail", { schema: "public" })
export class InventoriStokOpnameDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "opname" })
  opname: string;

  @Column("uuid", { name: "item" })
  item: string;

  @Column("uuid", { name: "batch" })
  batch: string;

  @Column("double precision", { name: "qty_awal"})
  qtyAwal: number;

  @Column("double precision", { name: "qty_akhir"})
  qtyAkhir: number;

  @Column("text", { name: "keterangan" })
  keterangan: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
