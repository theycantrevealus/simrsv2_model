import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("lab_order_nilai_pkey", ["id"], { unique: true })
@Entity("lab_order_nilai", { schema: "public" })
export class LabOrderNilai {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "lab_order" })
  labOrder: string;

  @Column("uuid", { name: "tindakan" })
  tindakan: string;

  @Column("integer", { name: "id_lab_nilai" })
  idLabNilai: number;

  @Column("text", { name: "nilai", nullable: true })
  nilai: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "petugas", nullable: true })
  petugas: string | null;
}
