import { Column, Entity, Index, OneToMany } from "typeorm";
import { InventoriDo } from "./InventoriDo";

@Index("master_inv_gudang_pkey", ["uid"], { unique: true })
@Entity("master_inv_gudang", { schema: "public" })
export class MasterInvGudang {
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

  @Column("character", { name: "jenis_gudang", nullable: true, length: 1 })
  jenisGudang: string | null;

  @Column("text", { name: "opname_rule", nullable: true })
  opnameRule: string | null;

  @Column("character", { name: "status", nullable: true, length: 1 })
  status: string | null;

  @OneToMany(() => InventoriDo, (inventoriDo) => inventoriDo.gudang)
  inventoriDos: InventoriDo[];
}
