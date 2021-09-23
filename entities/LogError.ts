import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("log_error_pkey", ["id"], { unique: true })
@Entity("log_error", { schema: "public" })
export class LogError {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "type", nullable: true })
  type: string | null;

  @Column("character varying", { name: "class", nullable: true })
  class: string | null;

  @Column("timestamp without time zone", { name: "logged_at", nullable: true })
  loggedAt: Date | null;

  @Column("text", { name: "message", nullable: true })
  message: string | null;
}
