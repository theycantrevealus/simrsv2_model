import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("inventori_amprah_proses_detail_pkey", ["id"], { unique: true })
@Entity("inventori_amprah_proses_detail", { schema: "public" })
export class InventoriAmprahProsesDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "amprah_proses" })
  amprahProses: string;

  @Column("uuid", { name: "item" })
  item: string;

  @Column("uuid", { name: "batch" })
  batch: string;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("double precision", { name: "qty", precision: 53 })
  qty: number;
}
