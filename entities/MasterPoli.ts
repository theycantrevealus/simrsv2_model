import { Column, Entity, Index } from "typeorm";

@Index("master_poli_pkey", ["uid"], { unique: true })
@Entity("master_poli", { schema: "public" })
export class MasterPoli {
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

  @Column("character varying", {
    name: "poli_asesmen",
    nullable: true,
    length: 50,
  })
  poliAsesmen: string | null;

  @Column("boolean", { name: "editable", default: () => "false" })
  editable: boolean;

  @Column("uuid", { name: "tindakan_konsultasi", nullable: true })
  tindakanKonsultasi: string | null;

  @Column("character varying", { name: "kode_bpjs", nullable: true })
  kodeBpjs: string | null;

  @Column("character varying", { name: "nama_bpjs", nullable: true })
  namaBpjs: string | null;
}
