import { Column, Entity, Index } from "typeorm";

@Index("pegawai_pkey", ["uid"], { unique: true })
@Entity("pegawai", { schema: "public" })
export class Pegawai {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "email", nullable: true, length: 100 })
  email: string | null;

  @Column("character varying", { name: "nama", nullable: true, length: 100 })
  nama: string | null;

  @Column("character varying", {
    name: "password",
    nullable: true,
    length: 100,
  })
  password: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "jabatan" })
  jabatan: string;

  @Column("boolean", { name: "editable", default: () => "true" })
  editable: boolean;

  @Column("uuid", { name: "unit", nullable: true })
  unit: string | null;

  @Column("character varying", { name: "kontak", nullable: true, length: 15 })
  kontak: string | null;
}
