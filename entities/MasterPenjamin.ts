import { Column, Entity, Index, OneToMany } from "typeorm";
import { Antrian } from "./Antrian";

@Index("master_penjamin_pkey", ["uid"], { unique: true })
@Entity("master_penjamin", { schema: "public" })
export class MasterPenjamin {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nama", length: 100 })
  nama: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("boolean", {
    name: "editable",
    nullable: true,
    default: () => "true",
  })
  editable: boolean | null;

  @OneToMany(() => Antrian, (antrian) => antrian.penjamin)
  antrians: Antrian[];
}
