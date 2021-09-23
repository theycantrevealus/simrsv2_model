import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("log_activity_pkey", ["id"], { unique: true })
@Entity("log_activity", { schema: "public" })
export class LogActivity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "user_uid", nullable: true })
  userUid: string | null;

  @Column("character varying", { name: "table_name", nullable: true })
  tableName: string | null;

  @Column("character", { name: "action", nullable: true, length: 1 })
  action: string | null;

  @Column("timestamp without time zone", { name: "logged_at", nullable: true })
  loggedAt: Date | null;

  @Column("text", { name: "old_value", nullable: true })
  oldValue: string | null;

  @Column("text", { name: "new_value", nullable: true })
  newValue: string | null;

  @Column("character", { name: "status", nullable: true, length: 1 })
  status: string | null;

  @Column("integer", { name: "login_id", nullable: true })
  loginId: number | null;

  @Column("character varying", { name: "unique_target", nullable: true })
  uniqueTarget: string | null;
}
