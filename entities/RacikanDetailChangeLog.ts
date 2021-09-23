import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("racikan_detail_change_log_pkey", ["id"], { unique: true })
@Entity("racikan_detail_change_log", { schema: "public" })
export class RacikanDetailChangeLog {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "racikan" })
  racikan: string;

  @Column("uuid", { name: "obat" })
  obat: string;

  @Column("text", { name: "kekuatan" })
  kekuatan: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("double precision", { name: "jumlah", nullable: true, precision: 53 })
  jumlah: number | null;
}
