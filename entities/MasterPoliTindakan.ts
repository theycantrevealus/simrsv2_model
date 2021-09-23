import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_poli_tindakan_penjamin_pkey", ["id"], { unique: true })
@Entity("master_poli_tindakan", { schema: "public" })
export class MasterPoliTindakan {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("uuid", { name: "uid_poli" })
  uidPoli: string;

  @Column("uuid", { name: "uid_tindakan" })
  uidTindakan: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
