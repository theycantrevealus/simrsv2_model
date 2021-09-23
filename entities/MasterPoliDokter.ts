import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_poli_dokter_pkey", ["id"], { unique: true })
@Entity("master_poli_dokter", { schema: "public" })
export class MasterPoliDokter {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "poli" })
  poli: string;

  @Column("uuid", { name: "dokter" })
  dokter: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
