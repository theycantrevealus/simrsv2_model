import { Column, Entity, Index } from "typeorm";

@Index("intro_group_pkey", ["uid"], { unique: true })
@Entity("intro_group", { schema: "public" })
export class IntroGroup {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nama" })
  nama: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("integer", { name: "modul", nullable: true })
  modul: number | null;
}
