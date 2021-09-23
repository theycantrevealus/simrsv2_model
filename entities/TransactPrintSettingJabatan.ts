import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("transact_print_setting_jabatan_pkey", ["id"], { unique: true })
@Entity("transact_print_setting_jabatan", { schema: "public" })
export class TransactPrintSettingJabatan {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "transact" })
  transact: string;

  @Column("integer", { name: "module" })
  module: number;

  @Column("uuid", { name: "jabatan" })
  jabatan: string;

  @Column("uuid", { name: "jabatan_target" })
  jabatanTarget: string;

  @Column("integer", { name: "urutan" })
  urutan: number;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
