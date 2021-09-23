import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_inv_satuan_konversi_pkey", ["id"], { unique: true })
@Entity("master_inv_satuan_konversi", { schema: "public" })
export class MasterInvSatuanKonversi {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "barang" })
  barang: string;

  @Column("uuid", { name: "dari_satuan" })
  dariSatuan: string;

  @Column("double precision", { name: "rasio", precision: 53 })
  rasio: number;

  @Column("uuid", { name: "ke_satuan" })
  keSatuan: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
