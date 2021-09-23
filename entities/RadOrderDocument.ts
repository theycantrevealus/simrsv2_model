import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("radiologi_order_document_pkey", ["id"], { unique: true })
@Entity("rad_order_document", { schema: "public" })
export class RadOrderDocument {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("uuid", { name: "radiologi_order" })
  radiologiOrder: string;

  @Column("text", { name: "lampiran" })
  lampiran: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
