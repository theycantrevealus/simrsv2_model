import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_icd_10_pkey", ["id"], { unique: true })
@Entity("master_icd_10", { schema: "public" })
export class MasterIcd_10 {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "kode", length: 6 })
  kode: string;

  @Column("character varying", { name: "nama" })
  nama: string;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
