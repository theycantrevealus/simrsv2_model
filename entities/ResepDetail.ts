import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("resep_detail_pkey", ["id"], { unique: true })
@Entity("resep_detail", { schema: "public" })
export class ResepDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "resep" })
  resep: string;

  @Column("uuid", { name: "obat" })
  obat: string;

  @Column("double precision", { name: "harga"})
  harga: number;

  @Column("character varying", { name: "signa_qty" })
  signaQty: string;

  @Column("character varying", { name: "signa_pakai" })
  signaPakai: string;

  @Column("double precision", { name: "qty"})
  qty: number;

  @Column("uuid", { name: "satuan" })
  satuan: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("integer", { name: "aturan_pakai", nullable: true })
  aturanPakai: number | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("character", {
    name: "status",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  status: string | null;

  @Column("uuid", { name: "penjamin", nullable: true })
  penjamin: string | null;

  @Column("integer", { name: "iterasi", nullable: true })
  iterasi: number | null;

  @Column("character varying", { name: "satuan_konsumsi", nullable: true })
  satuanKonsumsi: string | null;
}
