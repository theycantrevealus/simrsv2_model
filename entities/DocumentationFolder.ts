import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("documentation_folder_pkey", ["id"], { unique: true })
@Entity("documentation_folder", { schema: "public" })
export class DocumentationFolder {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("character", { name: "shown", length: 1, default: () => "'N'" })
  shown: string;

  @Column("integer", { name: "parent", nullable: true })
  parent: number | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("integer", { name: "show_order", nullable: true })
  showOrder: number | null;
}
