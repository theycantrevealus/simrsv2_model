import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pegawai_jabatan_unit_pkey", ["id"], { unique: true })
@Entity("pegawai_jabatan_unit", { schema: "public" })
export class PegawaiJabatanUnit {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "unit" })
  unit: string;

  @Column("uuid", { name: "jabatan" })
  jabatan: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
