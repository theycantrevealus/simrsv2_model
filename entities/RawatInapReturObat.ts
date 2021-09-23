import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("rawat_inap_retur_obat_pkey", ["id"], { unique: true })
@Entity("rawat_inap_retur_obat", { schema: "public" })
export class RawatInapReturObat {
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

  @Column("double precision", { name: "sisa", nullable: true})
  sisa: number | null;

  @Column("double precision", { name: "aktual", nullable: true})
  aktual: number | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("timestamp without time zone", { name: "logged_at", nullable: true })
  loggedAt: Date | null;

  @Column("uuid", { name: "uid_ranap", nullable: true })
  uidRanap: string | null;
}
