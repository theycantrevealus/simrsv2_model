import { Column, Entity, Index, OneToMany } from "typeorm";
import { Pasien } from "./Pasien";

@Index("master_wilayah_kelurahan_pkey", ["id"], { unique: true })
@Entity("master_wilayah_kelurahan", { schema: "public" })
export class MasterWilayahKelurahan {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "kecamatan" })
  kecamatan: string;

  @Column("character varying", { name: "nama" })
  nama: string;

  @OneToMany(() => Pasien, (pasien) => pasien.alamatKelurahan)
  pasiens: Pasien[];
}
