import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("asesmen_dokumen_value_pkey", ["id"], { unique: true })
@Entity("asesmen_dokumen_value", { schema: "public" })
export class AsesmenDokumenValue {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "asesmen_dokumen" })
  asesmenDokumen: string;

  @Column("character varying", { name: "param_iden", length: 100 })
  paramIden: string;

  @Column("text", { name: "param_value", nullable: true })
  paramValue: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
