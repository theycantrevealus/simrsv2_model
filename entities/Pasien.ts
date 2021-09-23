import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasterWilayahKabupaten } from "./MasterWilayahKabupaten";
import { MasterWilayahKecamatan } from "./MasterWilayahKecamatan";
import { MasterWilayahKelurahan } from "./MasterWilayahKelurahan";
import { MasterWilayahProvinsi } from "./MasterWilayahProvinsi";

@Index("pasien_pkey", ["uid"], { unique: true })
@Entity("pasien", { schema: "public" })
export class Pasien {
  @Column("uuid", { primary: true, name: "uid", default: () => "gen_uuid()" })
  uid: string;

  @Column("character varying", { name: "no_rm", length: 20 })
  noRm: string;

  @Column("character varying", { name: "nik", nullable: true, length: 20 })
  nik: string | null;

  @Column("character varying", { name: "nama", length: 100 })
  nama: string;

  @Column("integer", { name: "panggilan", nullable: true })
  panggilan: number | null;

  @Column("date", { name: "tanggal_lahir", nullable: true })
  tanggalLahir: string | null;

  @Column("character varying", {
    name: "tempat_lahir",
    nullable: true,
    length: 100,
  })
  tempatLahir: string | null;

  @Column("integer", { name: "jenkel", nullable: true })
  jenkel: number | null;

  @Column("integer", { name: "agama", nullable: true })
  agama: number | null;

  @Column("integer", { name: "warganegara", nullable: true })
  warganegara: number | null;

  @Column("bigint", { name: "suku", nullable: true })
  suku: string | null;

  @Column("integer", { name: "pendidikan", nullable: true })
  pendidikan: number | null;

  @Column("integer", { name: "goldar", nullable: true })
  goldar: number | null;

  @Column("integer", { name: "pekerjaan", nullable: true })
  pekerjaan: number | null;

  @Column("character varying", {
    name: "nama_ayah",
    nullable: true,
    length: 100,
  })
  namaAyah: string | null;

  @Column("character varying", {
    name: "nama_ibu",
    nullable: true,
    length: 100,
  })
  namaIbu: string | null;

  @Column("character varying", {
    name: "nama_suami_istri",
    nullable: true,
    length: 100,
  })
  namaSuamiIstri: string | null;

  @Column("integer", { name: "status_suami_istri", nullable: true })
  statusSuamiIstri: number | null;

  @Column("text", { name: "alamat", nullable: true })
  alamat: string | null;

  @Column("character varying", { name: "alamat_rt", nullable: true, length: 5 })
  alamatRt: string | null;

  @Column("character varying", { name: "alamat_rw", nullable: true, length: 5 })
  alamatRw: string | null;

  @Column("character varying", { name: "no_telp", nullable: true, length: 14 })
  noTelp: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("integer", { name: "status_pernikahan", nullable: true })
  statusPernikahan: number | null;

  @Column("character varying", { name: "email", nullable: true, length: 100 })
  email: string | null;

  @Column("character varying", { name: "no_bpjs", nullable: true, length: 25 })
  noBpjs: string | null;

  @Column("character varying", { name: "kode_pos", nullable: true, length: 10 })
  kodePos: string | null;

  @Column("character varying", { name: "no_passport", nullable: true })
  noPassport: string | null;

  @Column("character varying", { name: "driving_license", nullable: true })
  drivingLicense: string | null;

  @ManyToOne(
    () => MasterWilayahKabupaten,
    (masterWilayahKabupaten) => masterWilayahKabupaten.pasiens
  )
  @JoinColumn([{ name: "alamat_kabupaten", referencedColumnName: "id" }])
  alamatKabupaten: MasterWilayahKabupaten;

  @ManyToOne(
    () => MasterWilayahKecamatan,
    (masterWilayahKecamatan) => masterWilayahKecamatan.pasiens
  )
  @JoinColumn([{ name: "alamat_kecamatan", referencedColumnName: "id" }])
  alamatKecamatan: MasterWilayahKecamatan;

  @ManyToOne(
    () => MasterWilayahKelurahan,
    (masterWilayahKelurahan) => masterWilayahKelurahan.pasiens
  )
  @JoinColumn([{ name: "alamat_kelurahan", referencedColumnName: "id" }])
  alamatKelurahan: MasterWilayahKelurahan;

  @ManyToOne(
    () => MasterWilayahProvinsi,
    (masterWilayahProvinsi) => masterWilayahProvinsi.pasiens
  )
  @JoinColumn([{ name: "alamat_provinsi", referencedColumnName: "id" }])
  alamatProvinsi: MasterWilayahProvinsi;
}
