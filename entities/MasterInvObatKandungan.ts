import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_inv_obat_kandungan_pkey", ["id"], { unique: true })
@Entity("master_inv_obat_kandungan", { schema: "public" })
export class MasterInvObatKandungan {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "uid_obat" })
  uidObat: string;

  @Column("text", { name: "kandungan" })
  kandungan: string;

  @Column("text", { name: "keterangan" })
  keterangan: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
