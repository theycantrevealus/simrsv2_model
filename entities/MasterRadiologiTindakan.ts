import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MasterRadiologiJenis } from "./MasterRadiologiJenis";

@Entity("master_radiologi_tindakan", { schema: "public" })
export class MasterRadiologiTindakan {
  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "uid_tindakan" })
  uidTindakan: string;

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @ManyToOne(
    () => MasterRadiologiJenis,
    (masterRadiologiJenis) => masterRadiologiJenis.masterRadiologiTindakans
  )
  @JoinColumn([{ name: "jenis", referencedColumnName: "uid" }])
  jenis: MasterRadiologiJenis;
}
