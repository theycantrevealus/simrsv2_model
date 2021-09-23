import { Column, Entity, Index } from "typeorm";

@Index("master_lab_pkey", ["uid"], { unique: true })
@Entity("master_lab", { schema: "public" })
export class MasterLab {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "kode", nullable: true })
  kode: string | null;

  @Column("character varying", { name: "nama", length: 200 })
  nama: string;

  @Column("uuid", { name: "spesimen", nullable: true })
  spesimen: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("character", {
    name: "naratif",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  naratif: string | null;
}
