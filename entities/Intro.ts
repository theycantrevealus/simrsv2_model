import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("intro_pkey", ["id"], { unique: true })
@Entity("intro", { schema: "public" })
export class Intro {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "modul" })
  modul: number;

  @Column("integer", { name: "step" })
  step: number;

  @Column("character", { name: "type", nullable: true, length: 1 })
  type: string | null;

  @Column("character varying", { name: "element_target", nullable: true })
  elementTarget: string | null;

  @Column("text", { name: "remark", nullable: true })
  remark: string | null;

  @Column("character varying", { name: "tooltip_pos", nullable: true })
  tooltipPos: string | null;

  @Column("character", {
    name: "show_progress",
    length: 1,
    default: () => "'N'",
  })
  showProgress: string;

  @Column("character", { name: "show_bullet", length: 1, default: () => "'Y'" })
  showBullet: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character varying", { name: "judul" })
  judul: string;

  @Column("uuid", { name: "tutor_group", nullable: true })
  tutorGroup: string | null;

  @Column("character varying", { name: "trigger_dom", nullable: true })
  triggerDom: string | null;

  @Column("character varying", { name: "trigger_dom_type", nullable: true })
  triggerDomType: string | null;
}
