import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("resep_kajian_pkey", ["id"], { unique: true })
@Entity("resep_kajian", { schema: "public" })
export class ResepKajian {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "resep" })
  resep: string;

  @Column("uuid", { name: "asesmen" })
  asesmen: string;

  @Column("character varying", { name: "parameter_kajian" })
  parameterKajian: string;

  @Column("character", { name: "nilai", length: 1 })
  nilai: string;

  @Column("uuid", { name: "petugas" })
  petugas: string;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
