import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("lab_order_document_pkey", ["id"], { unique: true })
@Entity("lab_order_document", { schema: "public" })
export class LabOrderDocument {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("uuid", { name: "lab_order" })
  labOrder: string;

  @Column("text", { name: "lampiran" })
  lampiran: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
