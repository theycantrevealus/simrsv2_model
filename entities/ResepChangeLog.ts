import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("resep_change_log_pkey", ["id"], { unique: true })
@Entity("resep_change_log", { schema: "public" })
export class ResepChangeLog {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "resep" })
  resep: string;

  @Column("uuid", { name: "verifikator" })
  verifikator: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("uuid", { name: "item", nullable: true })
  item: string | null;

  @Column("double precision", { name: "qty", nullable: true, precision: 53 })
  qty: number | null;

  @Column("character varying", { name: "signa_qty", nullable: true })
  signaQty: string | null;

  @Column("character varying", { name: "signa_pakai", nullable: true })
  signaPakai: string | null;

  @Column("integer", { name: "aturan_pakai", nullable: true })
  aturanPakai: number | null;

  @Column("text", { name: "alasan_ubah", nullable: true })
  alasanUbah: string | null;
}
