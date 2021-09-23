import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_dokumen_item_pkey", ["id"], { unique: true })
@Entity("master_dokumen_item", { schema: "public" })
export class MasterDokumenItem {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "dokumen" })
  dokumen: string;

  @Column("character varying", { name: "param_iden", length: 100 })
  paramIden: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
