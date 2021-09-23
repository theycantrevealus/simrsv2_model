import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_mitra_provider_pkey", ["id"], { unique: true })
@Entity("master_mitra_provider", { schema: "public" })
export class MasterMitraProvider {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "mitra" })
  mitra: string;

  @Column("uuid", { name: "tindakan" })
  tindakan: string;

  @Column("character varying", { name: "jenis", length: 10 })
  jenis: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("double precision", { name: "harga", nullable: true})
  harga: number | null;
}
