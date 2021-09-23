import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("setting_pkey", ["id"], { unique: true })
@Entity("setting", { schema: "public" })
export class Setting {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "param_iden" })
  paramIden: string;

  @Column("text", { name: "param_value", nullable: true })
  paramValue: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character varying", { name: "param_table_link", nullable: true })
  paramTableLink: string | null;

  @Column("character varying", { name: "param_table_column", nullable: true })
  paramTableColumn: string | null;

  @Column("character varying", { name: "param_table_caption", nullable: true })
  paramTableCaption: string | null;

  @Column("character varying", { name: "caption", nullable: true })
  caption: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("character varying", { name: "inputtype", nullable: true })
  inputtype: string | null;

  @Column("text", { name: "selection", nullable: true })
  selection: string | null;
}
