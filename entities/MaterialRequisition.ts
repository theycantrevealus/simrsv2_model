import { Column, Entity, Index } from "typeorm";

@Index("material_requisition_pkey", ["uid"], { unique: true })
@Entity("material_requisition", { schema: "public" })
export class MaterialRequisition {
  @Column("integer", { primary: true, name: "uid" })
  uid: number;

  @Column("uuid", { name: "departemen" })
  departemen: string;

  @Column("character varying", { name: "jenis_departemen", length: 20 })
  jenisDepartemen: string;

  @Column("uuid", { name: "penanggung_jawab" })
  penanggungJawab: string;

  @Column("uuid", { name: "peminta" })
  peminta: string;

  @Column("character varying", { name: "nomor_mr", length: 10 })
  nomorMr: string;

  @Column("character", { name: "status", length: 1 })
  status: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;
}
