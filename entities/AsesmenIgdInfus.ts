import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("asesmen_igd_infus_pkey", ["id"], { unique: true })
@Entity("asesmen_igd_infus", { schema: "public" })
export class AsesmenIgdInfus {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "asesmen" })
  asesmen: string;

  @Column("time without time zone", { name: "pukul" })
  pukul: string;

  @Column("uuid", { name: "obat" })
  obat: string;

  @Column("character varying", { name: "dosis", nullable: true })
  dosis: string | null;

  @Column("text", { name: "rute", nullable: true })
  rute: string | null;

  @Column("text", { name: "keputusan", nullable: true })
  keputusan: string | null;

  @Column("uuid", { name: "oleh", nullable: true })
  oleh: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character varying", { name: "igd_type", nullable: true })
  igdType: string | null;
}
