import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("inventori_po_document_pkey", ["id"], { unique: true })
@Entity("inventori_po_document", { schema: "public" })
export class InventoriPoDocument {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "po" })
  po: string;

  @Column("character varying", { name: "document_name" })
  documentName: string;
}
