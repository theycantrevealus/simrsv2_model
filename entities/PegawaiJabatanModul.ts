import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pegawai_jabatan_akses_pkey", ["id"], { unique: true })
@Entity("pegawai_jabatan_modul", { schema: "public" })
export class PegawaiJabatanModul {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "jabatan" })
  jabatan: string;

  @Column("integer", { name: "modul" })
  modul: number;

  @Column("timestamp without time zone", { name: "logged_at" })
  loggedAt: Date;

  @Column("uuid", { name: "uid_admin" })
  uidAdmin: string;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
