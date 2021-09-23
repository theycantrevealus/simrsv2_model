import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_tindakan_kelas_harga_pkey", ["id"], { unique: true })
@Entity("master_tindakan_kelas_harga", { schema: "public" })
export class MasterTindakanKelasHarga {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("uuid", { name: "tindakan" })
  tindakan: string;

  @Column("uuid", { name: "kelas", nullable: true })
  kelas: string | null;

  @Column("double precision", { name: "harga", nullable: true, precision: 53 })
  harga: number | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "penjamin", nullable: true })
  penjamin: string | null;

  @Column("uuid", { name: "mitra", nullable: true })
  mitra: string | null;
}
