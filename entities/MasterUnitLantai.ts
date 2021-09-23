import { Column, Entity, Index, OneToMany } from "typeorm";
import { MasterUnitRuangan } from "./MasterUnitRuangan";

@Index("master_unit_lantai_pkey", ["uid"], { unique: true })
@Entity("master_unit_lantai", { schema: "public" })
export class MasterUnitLantai {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nama", length: 50 })
  nama: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @OneToMany(
    () => MasterUnitRuangan,
    (masterUnitRuangan) => masterUnitRuangan.lantai
  )
  masterUnitRuangans: MasterUnitRuangan[];
}
