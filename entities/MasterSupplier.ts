import { Column, Entity, Index, OneToMany } from "typeorm";
import { InventoriDo } from "./InventoriDo";

@Index("master_supplier_pkey", ["uid"], { unique: true })
@Entity("master_supplier", { schema: "public" })
export class MasterSupplier {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("character varying", { name: "nama", length: 80 })
  nama: string;

  @Column("character varying", { name: "email", nullable: true, length: 100 })
  email: string | null;

  @Column("character varying", { name: "kontak", nullable: true, length: 20 })
  kontak: string | null;

  @Column("text", { name: "alamat", nullable: true })
  alamat: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => InventoriDo, (inventoriDo) => inventoriDo.supplier)
  inventoriDos: InventoriDo[];
}
