import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("asesmen_tindakan", { schema: "public" })
export class AsesmenTindakan {
  @Column("uuid", { name: "kunjungan" })
  kunjungan: string;

  @Column("uuid", { name: "antrian" })
  antrian: string;

  @Column("uuid", { name: "asesmen" })
  asesmen: string;

  @Column("uuid", { name: "tindakan" })
  tindakan: string;

  @Column("uuid", { name: "penjamin" })
  penjamin: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("double precision", { name: "harga", precision: 53 })
  harga: number;

  @Column("uuid", { name: "kelas" })
  kelas: string;

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;
}
