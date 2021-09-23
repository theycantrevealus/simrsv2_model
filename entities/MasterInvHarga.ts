import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_inv_harga_pkey", ["id"], { unique: true })
@Entity("master_inv_harga", { schema: "public" })
export class MasterInvHarga {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "barang" })
  barang: string;

  @Column("uuid", { name: "penjamin" })
  penjamin: string;

  @Column("double precision", { name: "profit", precision: 53 })
  profit: number;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character", { name: "profit_type", length: 1, default: () => "'A'" })
  profitType: string;
}
