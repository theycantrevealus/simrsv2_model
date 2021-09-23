import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pegawai_akses_pkey", ["id"], { unique: true })
@Entity("pegawai_module", { schema: "public" })
export class PegawaiModule {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "uid_pegawai" })
  uidPegawai: string;

  @Column("integer", { name: "modul" })
  modul: number;

  @Column("uuid", { name: "uid_admin", nullable: true })
  uidAdmin: string | null;

  @Column("timestamp without time zone", { name: "logged_at", nullable: true })
  loggedAt: Date | null;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
