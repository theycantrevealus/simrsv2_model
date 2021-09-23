import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_lab_lokasi_item_pkey", ["id"], { unique: true })
@Entity("master_lab_lokasi_item", { schema: "public" })
export class MasterLabLokasiItem {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "lab" })
  lab: string;

  @Column("uuid", { name: "lokasi" })
  lokasi: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
