import { Column, Entity, Index } from "typeorm";

@Index("master_tindakan_kelas_pkey", ["uid"], { unique: true })
@Entity("master_tindakan_kelas", { schema: "public" })
export class MasterTindakanKelas {
  @Column("uuid", { primary: true, name: "uid", default: () => "gen_uuid()" })
  uid: string;

  @Column("character varying", { name: "nama", length: 20 })
  nama: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("integer", { name: "urutan", nullable: true })
  urutan: number | null;

  @Column("character varying", { name: "jenis", nullable: true, length: 10 })
  jenis: string | null;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
