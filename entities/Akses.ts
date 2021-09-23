import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("akses_pkey", ["id"], { unique: true })
@Entity("akses", { schema: "public" })
export class Akses {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "class_name", length: 50 })
  className: string;

  @Column("character varying", { name: "methods_name", length: 100 })
  methodsName: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp without time zone", {
    name: "updated_at",
    default: () => "now()",
  })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("text", { name: "remark", nullable: true })
  remark: string | null;

  @Column("character varying", { name: "caption", nullable: true, length: 50 })
  caption: string | null;
}
