import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pegawai_akses_pkey1", ["id"], { unique: true })
@Entity("pegawai_akses", { schema: "public" })
export class PegawaiAkses {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "uid_pegawai" })
  uidPegawai: string;

  @Column("integer", { name: "akses" })
  akses: number;

  @Column("character", { name: "status", length: 1 })
  status: string;
}
