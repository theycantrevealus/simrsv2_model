import { Column, Entity, Index, OneToMany } from "typeorm";
import { MasterRadiologiTindakan } from "./MasterRadiologiTindakan";

@Index("radiologi_jenis_pkey", ["uid"], { unique: true })
@Entity("master_radiologi_jenis", { schema: "public" })
export class MasterRadiologiJenis {
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

  @OneToMany(
    () => MasterRadiologiTindakan,
    (masterRadiologiTindakan) => masterRadiologiTindakan.jenis
  )
  masterRadiologiTindakans: MasterRadiologiTindakan[];
}
