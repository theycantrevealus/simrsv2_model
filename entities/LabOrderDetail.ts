import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("lab_order_detail_pkey", ["id"], { unique: true })
@Entity("lab_order_detail", { schema: "public" })
export class LabOrderDetail {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("uuid", { name: "lab_order" })
  labOrder: string;

  @Column("uuid", { name: "tindakan" })
  tindakan: string;

  @Column("uuid", { name: "penjamin" })
  penjamin: string;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("text", { name: "request_item", nullable: true })
  requestItem: string | null;

  @Column("uuid", { name: "mitra", nullable: true })
  mitra: string | null;

  @Column("uuid", { name: "verifikator", nullable: true })
  verifikator: string | null;

  @Column("uuid", { name: "dpjp", nullable: true })
  dpjp: string | null;

  @Column("date", { name: "tgl_ambil_sample", nullable: true })
  tglAmbilSample: string | null;

  @Column("uuid", { name: "invoice", nullable: true })
  invoice: string | null;
}
