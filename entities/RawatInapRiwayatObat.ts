import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("rawat_inap_riwayat_obat_pkey", ["id"], { unique: true })
@Entity("rawat_inap_riwayat_obat", { schema: "public" })
export class RawatInapRiwayatObat {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "petugas" })
  petugas: string;

  @Column("uuid", { name: "resep" })
  resep: string;

  @Column("character varying", { name: "obat" })
  obat: string;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("timestamp without time zone", { name: "logged_at" })
  loggedAt: Date;

  @Column("double precision", { name: "qty", nullable: true})
  qty: number | null;

  @Column("uuid", { name: "nurse_station", nullable: true })
  nurseStation: string | null;
}
