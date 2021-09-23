import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasterUnitLantai } from "./MasterUnitLantai";

@Index("master_unit_ruangan_pkey", ["uid"], { unique: true })
@Entity("master_unit_ruangan", { schema: "public" })
export class MasterUnitRuangan {
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

  @Column("character varying", { name: "kode_ruangan", length: 20 })
  kodeRuangan: string;

  @Column("integer", { name: "kelas" })
  kelas: number;

  @Column("integer", { name: "kapasitas", nullable: true })
  kapasitas: number | null;

  @ManyToOne(
    () => MasterUnitLantai,
    (masterUnitLantai) => masterUnitLantai.masterUnitRuangans
  )
  @JoinColumn([{ name: "lantai", referencedColumnName: "uid" }])
  lantai: MasterUnitLantai;
}
