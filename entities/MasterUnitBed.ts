import { Column, Entity, Index } from "typeorm";

@Index("master_unit_bed_pkey", ["uid"], { unique: true })
@Entity("master_unit_bed", { schema: "public" })
export class MasterUnitBed {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nama", length: 50 })
  nama: string;

  @Column("uuid", { name: "uid_ruangan" })
  uidRuangan: string;

  @Column("uuid", { name: "uid_lantai", nullable: true })
  uidLantai: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character", {
    name: "status",
    nullable: true,
    length: 1,
    default: () => "'R'",
  })
  status: string | null;

  @Column("double precision", { name: "tarif", nullable: true})
  tarif: number | null;
}
