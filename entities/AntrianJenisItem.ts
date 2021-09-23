import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("antrian_jenis_item_pkey", ["id"], { unique: true })
@Entity("antrian_jenis_item", { schema: "public" })
export class AntrianJenisItem {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "anjungan" })
  anjungan: string;

  @Column("uuid", { name: "jenis" })
  jenis: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
