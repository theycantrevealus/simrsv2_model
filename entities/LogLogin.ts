import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("login_log_pkey", ["id"], { unique: true })
@Entity("log_login", { schema: "public" })
export class LogLogin {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "user_uid", nullable: true })
  userUid: string | null;

  @Column("text", { name: "login_meta", nullable: true })
  loginMeta: string | null;

  @Column("timestamp without time zone", { name: "logged_at", nullable: true })
  loggedAt: Date | null;
}
