import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("transact_print_setting_page_pkey", ["id"], { unique: true })
@Entity("transact_print_setting_page", { schema: "public" })
export class TransactPrintSettingPage {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "transact" })
  transact: string;

  @Column("integer", { name: "module" })
  module: number;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
