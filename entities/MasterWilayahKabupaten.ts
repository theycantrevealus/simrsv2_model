import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasterWilayahProvinsi } from "./MasterWilayahProvinsi";
import { MasterWilayahKecamatan } from "./MasterWilayahKecamatan";
import { Pasien } from "./Pasien";

@Index("master_wilayah_kabupaten_pkey", ["id"], { unique: true })
@Entity("master_wilayah_kabupaten", { schema: "public" })
export class MasterWilayahKabupaten {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("character varying", { name: "nama" })
  nama: string;

  @ManyToOne(
    () => MasterWilayahProvinsi,
    (masterWilayahProvinsi) => masterWilayahProvinsi.masterWilayahKabupatens
  )
  @JoinColumn([{ name: "provinsi", referencedColumnName: "id" }])
  provinsi: MasterWilayahProvinsi;

  @OneToMany(
    () => MasterWilayahKecamatan,
    (masterWilayahKecamatan) => masterWilayahKecamatan.kabupaten
  )
  masterWilayahKecamatans: MasterWilayahKecamatan[];

  @OneToMany(() => Pasien, (pasien) => pasien.alamatKabupaten)
  pasiens: Pasien[];
}
