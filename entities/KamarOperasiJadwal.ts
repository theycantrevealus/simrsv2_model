import { Column, Entity, Index } from "typeorm";

@Index("jadwal_kamaroperasi_pkey", ["uid"], { unique: true })
@Entity("kamar_operasi_jadwal", { schema: "public" })
export class KamarOperasiJadwal {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("uuid", { name: "ruang_operasi" })
  ruangOperasi: string;

  @Column("date", { name: "tgl_operasi" })
  tglOperasi: string;

  @Column("time without time zone", { name: "jam_mulai" })
  jamMulai: string;

  @Column("time without time zone", { name: "jam_selesai" })
  jamSelesai: string;

  @Column("uuid", { name: "jenis_operasi" })
  jenisOperasi: string;

  @Column("character varying", { name: "operasi", nullable: true, length: 100 })
  operasi: string | null;

  @Column("uuid", { name: "dokter" })
  dokter: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
