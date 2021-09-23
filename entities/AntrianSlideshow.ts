import { Column, Entity, Index } from "typeorm";

@Index("antrian_slideshow_pkey", ["uid"], { unique: true })
@Entity("antrian_slideshow", { schema: "public" })
export class AntrianSlideshow {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("text", { name: "caption" })
  caption: string;

  @Column("character varying", { name: "gambar", length: 100 })
  gambar: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
