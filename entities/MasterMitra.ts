import { Column, Entity, Index } from "typeorm";

@Index("master_mitra_pkey", ["uid"], { unique: true })
@Entity("master_mitra", { schema: "public" })
export class MasterMitra {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nama", length: 50 })
  nama: string;

  @Column("character varying", { name: "jenis", length: 5 })
  jenis: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character varying", { name: "kontak", nullable: true, length: 15 })
  kontak: string | null;

  @Column("text", { name: "alamat", nullable: true })
  alamat: string | null;
}
