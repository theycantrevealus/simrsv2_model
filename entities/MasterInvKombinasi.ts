import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("master_inv_kombinasi_pkey", ["id"], { unique: true })
@Entity("master_inv_kombinasi", { schema: "public" })
export class MasterInvKombinasi {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("uuid", { name: "barang" })
  barang: string;

  @Column("uuid", { name: "barang_kombinasi" })
  barangKombinasi: string;

  @Column("uuid", { name: "satuan" })
  satuan: string;

  @Column("integer", { name: "varian" })
  varian: number;

  @Column("double precision", { name: "qty"})
  qty: number;
}
