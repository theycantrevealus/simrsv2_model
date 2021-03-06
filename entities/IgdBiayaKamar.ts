import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("igd_biaya_kamar_pkey", ["id"], { unique: true })
@Entity("igd_biaya_kamar", { schema: "public" })
export class IgdBiayaKamar {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp without time zone", { name: "logged_at" })
  loggedAt: Date;

  @Column("uuid", { name: "igd", nullable: true })
  igd: string | null;

  @Column("uuid", { name: "petugas", nullable: true })
  petugas: string | null;

  @Column("uuid", { name: "bed", nullable: true })
  bed: string | null;

  @Column("double precision", { name: "harga", nullable: true})
  harga: number | null;

  @Column("uuid", { name: "invoice", nullable: true })
  invoice: string | null;

  @Column("character", { name: "status", nullable: true, length: 1 })
  status: string | null;

  @Column("uuid", { name: "penjamin", nullable: true })
  penjamin: string | null;
}
