import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TerminologiItem } from "./TerminologiItem";

@Index("id", ["id"], { unique: true })
@Entity("terminologi", { schema: "public" })
export class Terminologi {
  @PrimaryGeneratedColumn({ type: "integer", name: "id", nullable: true })
  id: number | null;

  @Column("character varying", { name: "nama", length: 50 })
  nama: string;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @OneToMany(
    () => TerminologiItem,
    (terminologiItem) => terminologiItem.terminologi
  )
  terminologiItems: TerminologiItem[];
}
