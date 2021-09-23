import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_poli_perawat_pkey", ["id"], { unique: true })
@Entity("master_poli_perawat", { schema: "public" })
export class MasterPoliPerawat {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("uuid", { name: "poli" })
  poli: string;

  @Column("uuid", { name: "perawat" })
  perawat: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
