import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("material_requisition_detail_pkey", ["id"], { unique: true })
@Entity("material_requisition_detail", { schema: "public" })
export class MaterialRequisitionDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "mr" })
  mr: string;

  @Column("uuid", { name: "item" })
  item: string;

  @Column("uuid", { name: "satuan" })
  satuan: string;

  @Column("text", { name: "keterangan" })
  keterangan: string;

  @Column("character", { name: "status", length: 1, default: () => "'N'" })
  status: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
