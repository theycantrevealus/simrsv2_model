import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("asesmen_kebidanan_pkey", ["id"], { unique: true })
@Entity("asesmen_kebidanan", { schema: "public" })
export class AsesmenKebidanan {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "asesmen" })
  asesmen: string;

  @Column("date", { name: "tanggal_partus", nullable: true })
  tanggalPartus: string | null;

  @Column("text", { name: "tempat_partus", nullable: true })
  tempatPartus: string | null;

  @Column("character varying", {
    name: "jenis_partus",
    nullable: true,
    length: 100,
  })
  jenisPartus: string | null;

  @Column("character varying", {
    name: "penolong",
    nullable: true,
    length: 100,
  })
  penolong: string | null;

  @Column("character varying", { name: "nifas", nullable: true, length: 100 })
  nifas: string | null;

  @Column("character varying", {
    name: "jenkel_anak",
    nullable: true,
    length: 50,
  })
  jenkelAnak: string | null;

  @Column("text", { name: "keadaan_sekarang", nullable: true })
  keadaanSekarang: string | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character varying", { name: "bb_anak", nullable: true, length: 50 })
  bbAnak: string | null;

  @Column("character varying", {
    name: "usia_kehamilan",
    nullable: true,
    length: 50,
  })
  usiaKehamilan: string | null;
}
