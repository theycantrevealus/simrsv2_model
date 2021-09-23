import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Terminologi } from "./Terminologi";

@Index("terminologi_item_pkey", ["id"], { unique: true })
@Entity("terminologi_item", { schema: "public" })
export class TerminologiItem {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nama", length: 100 })
  nama: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("integer", { name: "term_parent", nullable: true })
  termParent: number | null;

  @ManyToOne(() => Terminologi, (terminologi) => terminologi.terminologiItems)
  @JoinColumn([{ name: "terminologi", referencedColumnName: "id" }])
  terminologi: Terminologi;
}
