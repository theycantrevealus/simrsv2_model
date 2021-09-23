  import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("kamar_operasi_paket_obat_detail_pkey", ["id"], { unique: true })
@Entity("kamar_operasi_paket_obat_detail", { schema: "public" })
export class KamarOperasiPaketObatDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "paket" })
  paket: string;

  @Column("uuid", { name: "obat" })
  obat: string;

  @Column("double precision", { name: "qty"})
  qty: number;

  @Column("text", { name: "remark", nullable: true })
  remark: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
