import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasterWilayahKabupaten } from "./MasterWilayahKabupaten";
import { Pasien } from "./Pasien";

@Index("master_wilayah_kecamatan_pkey", ["id"], { unique: true })
@Entity("master_wilayah_kecamatan", { schema: "public" })
export class MasterWilayahKecamatan {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("character varying", { name: "nama" })
  nama: string;

  @ManyToOne(
    () => MasterWilayahKabupaten,
    (masterWilayahKabupaten) => masterWilayahKabupaten.masterWilayahKecamatans
  )
  @JoinColumn([{ name: "kabupaten", referencedColumnName: "id" }])
  kabupaten: MasterWilayahKabupaten;

  @OneToMany(() => Pasien, (pasien) => pasien.alamatKecamatan)
  pasiens: Pasien[];
}
