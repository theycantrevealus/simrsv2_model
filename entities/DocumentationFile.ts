import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("documentation_file_pkey", ["id"], { unique: true })
@Entity("documentation_file", { schema: "public" })
export class DocumentationFile {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "folder" })
  folder: number;

  @Column("character", { name: "shown", length: 1, default: () => "'N'" })
  shown: string;

  @Column("integer", { name: "show_order" })
  showOrder: number;

  @Column("character varying", { name: "title" })
  title: string;

  @Column("text", { name: "content", nullable: true })
  content: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
