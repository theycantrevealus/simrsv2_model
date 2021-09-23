import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("kamar_operasi_obat_pkey", ["id"], { unique: true })
@Entity("kamar_operasi_obat", { schema: "public" })
export class KamarOperasiObat {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "operasi" })
  operasi: string;

  @Column("uuid", { name: "obat" })
  obat: string;

  @Column("uuid", { name: "batch" })
  batch: string;

  @Column("double precision", { name: "qty_rencana"})
  qtyRencana: number;

  @Column("double precision", {
    name: "qty_terpakai",
    nullable: true,
    precision: 53,
  })
  qtyTerpakai: number | null;

  @Column("text", { name: "remark", nullable: true })
  remark: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
