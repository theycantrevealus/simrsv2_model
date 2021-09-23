import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_inv_gudang_rak_pkey", ["id"], { unique: true })
@Entity("master_inv_gudang_rak", { schema: "public" })
export class MasterInvGudangRak {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "barang" })
  barang: string;

  @Column("uuid", { name: "gudang" })
  gudang: string;

  @Column("character varying", { name: "rak", length: 20 })
  rak: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
