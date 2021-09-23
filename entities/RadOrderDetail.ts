import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("radiologi_order_detail_pkey", ["id"], { unique: true })
@Entity("rad_order_detail", { schema: "public" })
export class RadOrderDetail {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("uuid", { name: "radiologi_order" })
  radiologiOrder: string;

  @Column("uuid", { name: "tindakan" })
  tindakan: string;

  @Column("uuid", { name: "penjamin" })
  penjamin: string;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("text", { name: "kesimpulan", nullable: true })
  kesimpulan: string | null;

  @Column("text", { name: "gambar", nullable: true })
  gambar: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "mitra", nullable: true })
  mitra: string | null;

  @Column("uuid", { name: "verifikator", nullable: true })
  verifikator: string | null;

  @Column("uuid", { name: "invoice", nullable: true })
  invoice: string | null;
}
