import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_lab_nilai_pkey", ["id"], { unique: true })
@Entity("master_lab_nilai", { schema: "public" })
export class MasterLabNilai {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "lab" })
  lab: string;

  @Column("character varying", { name: "satuan", length: 10 })
  satuan: string;

  @Column("text", { name: "nilai_maks", nullable: true })
  nilaiMaks: string | null;

  @Column("text", { name: "nilai_min", nullable: true })
  nilaiMin: string | null;

  @Column("text", { name: "keterangan" })
  keterangan: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character", { name: "status", length: 1, default: () => "'A'" })
  status: string;

  @Column("character", {
    name: "style",
    nullable: true,
    length: 1,
    default: () => "'I'",
  })
  style: string | null;
}
