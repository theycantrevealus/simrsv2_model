import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("igd_retur_obat_pkey", ["id"], { unique: true })
@Entity("igd_retur_obat", { schema: "public" })
export class IgdReturObat {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "mutasi", nullable: true })
  mutasi: string | null;

  @Column("uuid", { name: "petugas" })
  petugas: string;

  @Column("uuid", { name: "obat" })
  obat: string;

  @Column("uuid", { name: "batch" })
  batch: string;

  @Column("double precision", { name: "sisa", nullable: true, precision: 53 })
  sisa: number | null;

  @Column("double precision", { name: "aktual", nullable: true, precision: 53 })
  aktual: number | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("uuid", { name: "uid_igd", nullable: true })
  uidIgd: string | null;

  @Column("timestamp without time zone", { name: "logged_at", nullable: true })
  loggedAt: Date | null;
}
