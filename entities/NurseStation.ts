import { Column, Entity, Index } from "typeorm";

@Index("nurse_station_pkey", ["uid"], { unique: true })
@Entity("nurse_station", { schema: "public" })
export class NurseStation {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "kode", nullable: true })
  kode: string | null;

  @Column("character varying", { name: "nama" })
  nama: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "unit", nullable: true })
  unit: string | null;

  @Column("character varying", { name: "type", nullable: true })
  type: string | null;
}
