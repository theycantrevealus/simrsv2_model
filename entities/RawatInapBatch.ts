import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("rawat_inap_batch_pkey", ["id"], { unique: true })
@Entity("rawat_inap_batch", { schema: "public" })
export class RawatInapBatch {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "gudang" })
  gudang: string;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("uuid", { name: "resep" })
  resep: string;

  @Column("character varying", { name: "obat" })
  obat: string;

  @Column("double precision", { name: "qty"})
  qty: number;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "batch", nullable: true })
  batch: string | null;

  @Column("character", { name: "status", nullable: true, length: 1 })
  status: string | null;

  @Column("uuid", { name: "mutasi", nullable: true })
  mutasi: string | null;
}
