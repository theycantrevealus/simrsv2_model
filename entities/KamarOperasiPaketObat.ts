import { Column, Entity, Index } from "typeorm";

@Index("kamar_operasi_paket_obat_pkey", ["uid"], { unique: true })
@Entity("kamar_operasi_paket_obat", { schema: "public" })
export class KamarOperasiPaketObat {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nama", nullable: true })
  nama: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("text", { name: "remark", nullable: true })
  remark: string | null;
}
