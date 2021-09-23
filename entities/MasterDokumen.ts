import { Column, Entity, Index } from "typeorm";

@Index("master_dokumen_pkey", ["uid"], { unique: true })
@Entity("master_dokumen", { schema: "public" })
export class MasterDokumen {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nama", length: 100 })
  nama: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("text", { name: "template_iden", nullable: true })
  templateIden: string | null;

  @Column("uuid", { name: "dokumen_header", nullable: true })
  dokumenHeader: string | null;

  @Column("character", { name: "dokumen_type", nullable: true, length: 1 })
  dokumenType: string | null;
}
