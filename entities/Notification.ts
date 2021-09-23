import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("notification_pkey", ["id"], { unique: true })
@Entity("notification", { schema: "public" })
export class Notification {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "sender" })
  sender: string;

  @Column("character varying", { name: "receiver_type", length: 10 })
  receiverType: string;

  @Column("character varying", { name: "receiver", length: 100 })
  receiver: string;

  @Column("character varying", { name: "protocols", length: 100 })
  protocols: string;

  @Column("text", { name: "notify_content" })
  notifyContent: string;

  @Column("character varying", { name: "type", nullable: true, length: 10 })
  type: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("character", { name: "status", length: 1, default: () => "'N'" })
  status: string;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
