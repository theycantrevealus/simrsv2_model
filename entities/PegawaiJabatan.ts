import { Column, Entity, Index } from "typeorm";

@Index("pegawai_jabatan_pkey", ["uid"], { unique: true })
@Entity("pegawai_jabatan", { schema: "public" })
export class PegawaiJabatan {
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

  @Column("boolean", { name: "editable", default: () => "true" })
  editable: boolean;
}
