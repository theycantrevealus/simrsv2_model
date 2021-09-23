import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_lab_kategori_item_pkey", ["id"], { unique: true })
@Entity("master_lab_kategori_item", { schema: "public" })
export class MasterLabKategoriItem {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "lab" })
  lab: string;

  @Column("uuid", { name: "kategori" })
  kategori: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
