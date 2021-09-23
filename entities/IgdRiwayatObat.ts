import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("igd_riwayat_obat_pkey", ["id"], { unique: true })
@Entity("igd_riwayat_obat", { schema: "public" })
export class IgdRiwayatObat {
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

  @Column("double precision", { name: "qty", nullable: true, precision: 53 })
  qty: number | null;

  @Column("uuid", { name: "nurse_station", nullable: true })
  nurseStation: string | null;

  @Column("timestamp without time zone", { name: "logged_at" })
  loggedAt: Date;
}
