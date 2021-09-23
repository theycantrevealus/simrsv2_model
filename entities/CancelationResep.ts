import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cancelation_resep_pkey", ["id"], { unique: true })
@Entity("cancelation_resep", { schema: "public" })
export class CancelationResep {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "resep" })
  resep: string;

  @Column("uuid", { name: "oleh" })
  oleh: string;

  @Column("text", { name: "alasan", nullable: true })
  alasan: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
