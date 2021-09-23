import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("aplicares_kamar_log_pkey", ["id"], { unique: true })
@Entity("aplicares_kamar_log", { schema: "public" })
export class AplicaresKamarLog {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("uuid", { name: "ruangan" })
  ruangan: string;

  @Column("character varying", { name: "kodekelas", length: 5 })
  kodekelas: string;

  @Column("character varying", { name: "kapasitas", nullable: true })
  kapasitas: string | null;

  @Column("character varying", { name: "tersedia", nullable: true })
  tersedia: string | null;

  @Column("character varying", { name: "tersediapria", nullable: true })
  tersediapria: string | null;

  @Column("character varying", { name: "tersediawanita", nullable: true })
  tersediawanita: string | null;

  @Column("character varying", { name: "tersediapriawanita", nullable: true })
  tersediapriawanita: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
