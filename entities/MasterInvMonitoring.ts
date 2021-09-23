import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_inv_monitoring_pkey", ["id"], { unique: true })
@Entity("master_inv_monitoring", { schema: "public" })
export class MasterInvMonitoring {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "barang" })
  barang: string;

  @Column("uuid", { name: "gudang" })
  gudang: string;

  @Column("double precision", { name: "min"})
  min: number;

  @Column("double precision", { name: "max"})
  max: number;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
