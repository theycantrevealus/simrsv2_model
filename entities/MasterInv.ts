import { Column, Entity, Index } from "typeorm";

@Index("master_inv_pkey", ["uid"], { unique: true })
@Entity("master_inv", { schema: "public" })
export class MasterInv {
  @Column("uuid", { primary: true, name: "uid", default: () => "gen_uuid()" })
  uid: string;

  @Column("character varying", { name: "nama", length: 50 })
  nama: string;

  @Column("uuid", { name: "kategori" })
  kategori: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("character varying", {
    name: "kode_barang",
    nullable: true,
    length: 50,
  })
  kodeBarang: string | null;

  @Column("uuid", { name: "manufacture", nullable: true })
  manufacture: string | null;

  @Column("text", { name: "keterangan", nullable: true })
  keterangan: string | null;

  @Column("uuid", { name: "satuan_terkecil" })
  satuanTerkecil: string;
}
