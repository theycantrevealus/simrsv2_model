import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("modul_pkey", ["id"], { unique: true })
@Entity("modul", { schema: "public" })
export class Modul {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nama", length: 50 })
  nama: string;

  @Column("character varying", { name: "identifier", length: 100 })
  identifier: string;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("integer", { name: "parent", nullable: true, default: () => "0" })
  parent: number | null;

  @Column("character varying", { name: "icon", nullable: true, length: 50 })
  icon: string | null;

  @Column("character", { name: "show_on_menu", nullable: true, length: 1 })
  showOnMenu: string | null;

  @Column("integer", { name: "show_order", nullable: true })
  showOrder: number | null;

  @Column("integer", { name: "menu_group", nullable: true })
  menuGroup: number | null;

  @Column("integer", { name: "level", nullable: true })
  level: number | null;
}
