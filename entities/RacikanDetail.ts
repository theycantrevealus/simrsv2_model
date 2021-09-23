import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("racikan_detail_pkey", ["id"], { unique: true })
@Entity("racikan_detail", { schema: "public" })
export class RacikanDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "asesmen" })
  asesmen: string;

  @Column("uuid", { name: "obat" })
  obat: string;

  @Column("double precision", { name: "pembulatan"})
  pembulatan: number;

  @Column("double precision", { name: "harga"})
  harga: number;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "racikan" })
  racikan: string;

  @Column("uuid", { name: "penjamin", nullable: true })
  penjamin: string | null;

  @Column("double precision", { name: "ratio"})
  ratio: number;

  @Column("double precision", {
    name: "takar_bulat",
    nullable: true,
    precision: 53,
  })
  takarBulat: number | null;

  @Column("character varying", { name: "takar_decimal", nullable: true })
  takarDecimal: string | null;

  @Column("character varying", { name: "kekuatan", nullable: true, length: 20 })
  kekuatan: string | null;

  @Column("character", {
    name: "status",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  status: string | null;

  @Column("character varying", { name: "satuan_konsumsi", nullable: true })
  satuanKonsumsi: string | null;
}
