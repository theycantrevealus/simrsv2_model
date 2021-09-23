import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("nurse_station_kamar_pkey", ["id"], { unique: true })
@Entity("nurse_station_ranjang", { schema: "public" })
export class NurseStationRanjang {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "nurse_station" })
  nurseStation: string;

  @Column("uuid", { name: "ranjang" })
  ranjang: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
