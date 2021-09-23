import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_icd_9_pkey", ["id"], { unique: true })
@Entity("master_icd_9", { schema: "public" })
export class MasterIcd_9 {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "kode", length: 6 })
  kode: string;

  @Column("character varying", { name: "nama" })
  nama: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp without time zone", {
    name: "updated_at",
    default: () => "now()",
  })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
