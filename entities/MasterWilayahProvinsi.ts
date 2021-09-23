import { Column, Entity, Index, OneToMany } from "typeorm";
import { MasterWilayahKabupaten } from "./MasterWilayahKabupaten";
import { Pasien } from "./Pasien";

@Index("master_wilayah_provinsi_pkey", ["id"], { unique: true })
@Entity("master_wilayah_provinsi", { schema: "public" })
export class MasterWilayahProvinsi {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nama" })
  nama: string;

  @OneToMany(
    () => MasterWilayahKabupaten,
    (masterWilayahKabupaten) => masterWilayahKabupaten.provinsi
  )
  masterWilayahKabupatens: MasterWilayahKabupaten[];

  @OneToMany(() => Pasien, (pasien) => pasien.alamatProvinsi)
  pasiens: Pasien[];
}
