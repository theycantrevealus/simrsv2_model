import { Column, Entity, Index } from "typeorm";

@Index("master_lab_spesimen_pkey", ["uid"], { unique: true })
@Entity("master_lab_spesimen", { schema: "public" })
export class MasterLabSpesimen {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nama" })
  nama: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
