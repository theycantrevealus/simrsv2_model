import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pasien_penjamin_pkey", ["id"], { unique: true })
@Entity("pasien_penjamin", { schema: "public" })
export class PasienPenjamin {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("uuid", { name: "penjamin", nullable: true })
  penjamin: string | null;

  @Column("date", { name: "valid_awal", nullable: true })
  validAwal: string | null;

  @Column("date", { name: "valid_akhir", nullable: true })
  validAkhir: string | null;

  @Column("text", { name: "rest_meta", nullable: true })
  restMeta: string | null;

  @Column("date", { name: "terdaftar", nullable: true })
  terdaftar: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
