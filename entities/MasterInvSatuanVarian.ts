import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_inv_satuan_varian_pkey", ["id"], { unique: true })
@Entity("master_inv_satuan_varian", { schema: "public" })
export class MasterInvSatuanVarian {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "barang" })
  barang: string;

  @Column("uuid", { name: "satuan" })
  satuan: string;

  @Column("character varying", { name: "nama", length: 50 })
  nama: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
