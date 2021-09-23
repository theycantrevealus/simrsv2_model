import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_dokumen_footer_pkey", ["id"], { unique: true })
@Entity("master_dokumen_footer", { schema: "public" })
export class MasterDokumenFooter {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "dokumen" })
  dokumen: string;

  @Column("uuid", { name: "jabatan" })
  jabatan: string;

  @Column("uuid", { name: "pegawai" })
  pegawai: string;

  @Column("integer", { name: "urutan" })
  urutan: number;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
