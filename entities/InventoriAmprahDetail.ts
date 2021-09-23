import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("inventori_amprah_detail_pkey", ["id"], { unique: true })
@Entity("inventori_amprah_detail", { schema: "public" })
export class InventoriAmprahDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "amprah" })
  amprah: string;

  @Column("double precision", { name: "jumlah", precision: 53 })
  jumlah: number;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "item" })
  item: string;
}
