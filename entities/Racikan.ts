import { Column, Entity, Index } from "typeorm";

@Index("racikan_pkey", ["uid"], { unique: true })
@Entity("racikan", { schema: "public" })
export class Racikan {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "asesmen" })
  asesmen: string;

  @Column("character varying", { name: "kode", length: 50 })
  kode: string;

  @Column("double precision", { name: "total", precision: 53 })
  total: number;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("character varying", { name: "signa_qty", nullable: true })
  signaQty: string | null;

  @Column("character varying", { name: "signa_pakai", nullable: true })
  signaPakai: string | null;

  @Column("double precision", { name: "qty", nullable: true, precision: 53 })
  qty: number | null;

  @Column("integer", { name: "aturan_pakai", nullable: true })
  aturanPakai: number | null;

  @Column("character", { name: "status", length: 1, default: () => "'N'" })
  status: string;

  @Column("text", { name: "alasan_ubah", nullable: true })
  alasanUbah: string | null;

  @Column("integer", { name: "iterasi", nullable: true })
  iterasi: number | null;
}
