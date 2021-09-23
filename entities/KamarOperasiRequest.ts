import { Column, Entity, Index } from "typeorm";

@Index("kamar_operasi_request_pkey", ["uid"], { unique: true })
@Entity("kamar_operasi_request", { schema: "public" })
export class KamarOperasiRequest {
  @Column("uuid", { primary: true, name: "uid" })
  uid: string;

  @Column("uuid", { name: "dokter" })
  dokter: string;

  @Column("uuid", { name: "asesmen" })
  asesmen: string;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("date", { name: "tanggal" })
  tanggal: string;

  @Column("timestamp without time zone", { name: "jam_mulai" })
  jamMulai: Date;

  @Column("timestamp without time zone", { name: "jam_selesai" })
  jamSelesai: Date;

  @Column("uuid", { name: "jenis_operasi" })
  jenisOperasi: string;

  @Column("text", { name: "keterangan" })
  keterangan: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character", {
    name: "status",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  status: string | null;
}
