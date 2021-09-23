import { Column, Entity, Index } from "typeorm";

@Index("asesmen_dokumen_pkey", ["uid"], { unique: true })
@Entity("asesmen_dokumen", { schema: "public" })
export class AsesmenDokumen {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("timestamp without time zone", { name: "tanggal" })
  tanggal: Date;

  @Column("uuid", { name: "asesmen" })
  asesmen: string;

  @Column("uuid", { name: "dokumen" })
  dokumen: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
