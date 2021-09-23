import { Column, Entity, Index } from "typeorm";

@Index("master_dokumen_header_pkey", ["uid"], { unique: true })
@Entity("master_dokumen_header", { schema: "public" })
export class MasterDokumenHeader {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "identifier" })
  identifier: string;

  @Column("text", { name: "template", nullable: true })
  template: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
