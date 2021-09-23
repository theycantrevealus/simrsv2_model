import { Column, Entity } from "typeorm";

@Entity("asesmen_rawat_kulit_kelamin", { schema: "public" })
export class AsesmenRawatKulitKelamin {
  @Column("uuid", { name: "uid" })
  uid: string;

  @Column("character varying", { name: "cara_masuk_lainnya", nullable: true })
  caraMasukLainnya: string | null;

  @Column("uuid", { name: "antrian" })
  antrian: string;

  @Column("character varying", { name: "no_rm", length: 15 })
  noRm: string;

  @Column("uuid", { name: "pasien" })
  pasien: string;

  @Column("uuid", { name: "departemen" })
  departemen: string;

  @Column("uuid", { name: "perawat" })
  perawat: string;

  @Column("character varying", { name: "pj_pasien", nullable: true })
  pjPasien: string | null;

  @Column("character varying", { name: "info_dari", nullable: true })
  infoDari: string | null;

  @Column("timestamp without time zone", { name: "waktu_pengkajian" })
  waktuPengkajian: Date;

  @Column("character varying", { name: "kesadaran", nullable: true })
  kesadaran: string | null;

  @Column("character varying", {
    name: "tanda_vital_td",
    nullable: true,
    length: 20,
  })
  tandaVitalTd: string | null;

  @Column("character varying", {
    name: "tanda_vital_n",
    nullable: true,
    length: 20,
  })
  tandaVitalN: string | null;

  @Column("character varying", {
    name: "tanda_vital_s",
    nullable: true,
    length: 20,
  })
  tandaVitalS: string | null;

  @Column("character varying", {
    name: "tanda_vital_rr",
    nullable: true,
    length: 20,
  })
  tandaVitalRr: string | null;

  @Column("character varying", {
    name: "sikap_tubuh",
    nullable: true,
    length: 20,
  })
  sikapTubuh: string | null;

  @Column("character varying", {
    name: "cara_masuk",
    nullable: true,
    length: 20,
  })
  caraMasuk: string | null;

  @Column("character varying", { name: "rujukan", nullable: true })
  rujukan: string | null;

  @Column("character varying", { name: "rujukan_ket", nullable: true })
  rujukanKet: string | null;

  @Column("text", { name: "rujukan_diagnosa", nullable: true })
  rujukanDiagnosa: string | null;

  @Column("character varying", {
    name: "riwayat_sakit_sebelumnya",
    nullable: true,
  })
  riwayatSakitSebelumnya: string | null;

  @Column("character varying", { name: "riwayat_operasi", nullable: true })
  riwayatOperasi: string | null;

  @Column("date", { name: "riwayat_waktu_operasi", nullable: true })
  riwayatWaktuOperasi: string | null;

  @Column("character varying", { name: "riwayat_dirawat", nullable: true })
  riwayatDirawat: string | null;

  @Column("character varying", {
    name: "riwayat_waktu_dirawat",
    nullable: true,
  })
  riwayatWaktuDirawat: string | null;

  @Column("character varying", {
    name: "riwayat_diagnosa_dirawat",
    nullable: true,
  })
  riwayatDiagnosaDirawat: string | null;

  @Column("character varying", {
    name: "riwayat_pengobatan_dirumah_nama_obat",
    nullable: true,
  })
  riwayatPengobatanDirumahNamaObat: string | null;

  @Column("character varying", { name: "riwayat_alergi", nullable: true })
  riwayatAlergi: string | null;

  @Column("character varying", {
    name: "riwayat_transfusi_golongan_darah",
    nullable: true,
  })
  riwayatTransfusiGolonganDarah: string | null;

  @Column("character varying", { name: "riwayat_merokok", nullable: true })
  riwayatMerokok: string | null;

  @Column("character varying", { name: "riwayat_miras", nullable: true })
  riwayatMiras: string | null;

  @Column("character varying", {
    name: "riwayat_obt_terlarang",
    nullable: true,
  })
  riwayatObtTerlarang: string | null;

  @Column("character varying", {
    name: "riwayat_imunisasi_dpt_1",
    nullable: true,
  })
  riwayatImunisasiDpt_1: string | null;

  @Column("character varying", {
    name: "riwayat_imunisasi_dpt_2",
    nullable: true,
  })
  riwayatImunisasiDpt_2: string | null;

  @Column("character varying", {
    name: "riwayat_imunisasi_dpt_3",
    nullable: true,
  })
  riwayatImunisasiDpt_3: string | null;

  @Column("character varying", {
    name: "riwayat_imunisasi_campak",
    nullable: true,
  })
  riwayatImunisasiCampak: string | null;

  @Column("character varying", {
    name: "riwayat_imunisasi_bcg",
    nullable: true,
  })
  riwayatImunisasiBcg: string | null;

  @Column("character varying", {
    name: "riwayat_imunisasi_polio_1",
    nullable: true,
  })
  riwayatImunisasiPolio_1: string | null;

  @Column("character varying", {
    name: "riwayat_imunisasi_polio_2",
    nullable: true,
  })
  riwayatImunisasiPolio_2: string | null;

  @Column("character varying", {
    name: "riwayat_imunisasi_hepatitis",
    nullable: true,
  })
  riwayatImunisasiHepatitis: string | null;

  @Column("character varying", {
    name: "riwayat_imunisasi_mmr",
    nullable: true,
  })
  riwayatImunisasiMmr: string | null;

  @Column("character varying", {
    name: "riwayat_keluarga_asma",
    nullable: true,
  })
  riwayatKeluargaAsma: string | null;

  @Column("character varying", {
    name: "riwayat_keluarga_diabetes",
    nullable: true,
  })
  riwayatKeluargaDiabetes: string | null;

  @Column("character varying", {
    name: "riwayat_keluarga_hipertensi",
    nullable: true,
  })
  riwayatKeluargaHipertensi: string | null;

  @Column("character varying", {
    name: "riwayat_keluarga_cancer",
    nullable: true,
  })
  riwayatKeluargaCancer: string | null;

  @Column("character varying", {
    name: "riwayat_keluarga_anemia",
    nullable: true,
  })
  riwayatKeluargaAnemia: string | null;

  @Column("character varying", {
    name: "riwayat_keluarga_jantung",
    nullable: true,
  })
  riwayatKeluargaJantung: string | null;

  @Column("character varying", {
    name: "riwayat_keluarga_lainnya",
    nullable: true,
  })
  riwayatKeluargaLainnya: string | null;

  @Column("character varying", {
    name: "riwayat_keluarga_lainnya_ket",
    nullable: true,
  })
  riwayatKeluargaLainnyaKet: string | null;

  @Column("character varying", { name: "riwayat_hub_keluarga", nullable: true })
  riwayatHubKeluarga: string | null;

  @Column("character varying", { name: "menarche_umur", nullable: true })
  menarcheUmur: string | null;

  @Column("character varying", { name: "menarche_siklus", nullable: true })
  menarcheSiklus: string | null;

  @Column("character varying", { name: "menarche_stat", nullable: true })
  menarcheStat: string | null;

  @Column("character varying", { name: "menarche_lama_siklus", nullable: true })
  menarcheLamaSiklus: string | null;

  @Column("character varying", { name: "keluhan_haid", nullable: true })
  keluhanHaid: string | null;

  @Column("character varying", { name: "hpht", nullable: true })
  hpht: string | null;

  @Column("character varying", { name: "taksiran_persalinan", nullable: true })
  taksiranPersalinan: string | null;

  @Column("character varying", { name: "wanita_hamil", nullable: true })
  wanitaHamil: string | null;

  @Column("character varying", { name: "pria_prostat", nullable: true })
  priaProstat: string | null;

  @Column("character varying", { name: "program_kb", nullable: true })
  programKb: string | null;

  @Column("character varying", { name: "program_kb_iud", nullable: true })
  programKbIud: string | null;

  @Column("character varying", { name: "program_kb_susuk", nullable: true })
  programKbSusuk: string | null;

  @Column("character varying", { name: "program_kb_suntik", nullable: true })
  programKbSuntik: string | null;

  @Column("character varying", { name: "program_kb_pil", nullable: true })
  programKbPil: string | null;

  @Column("character varying", { name: "program_kb_steril", nullable: true })
  programKbSteril: string | null;

  @Column("character varying", { name: "program_kb_vasectomi", nullable: true })
  programKbVasectomi: string | null;

  @Column("character varying", {
    name: "program_kb_lama_pemakaian",
    nullable: true,
  })
  programKbLamaPemakaian: string | null;

  @Column("character varying", { name: "program_kb_keluhan", nullable: true })
  programKbKeluhan: string | null;

  @Column("character varying", { name: "ginekologi_status", nullable: true })
  ginekologiStatus: string | null;

  @Column("character varying", { name: "ginekologi", nullable: true })
  ginekologi: string | null;

  @Column("character varying", { name: "ginekologi_lainnya", nullable: true })
  ginekologiLainnya: string | null;

  @Column("character varying", { name: "tgl_partus", nullable: true })
  tglPartus: string | null;

  @Column("character varying", { name: "usia_hamil", nullable: true })
  usiaHamil: string | null;

  @Column("character varying", { name: "tempat_partus", nullable: true })
  tempatPartus: string | null;

  @Column("character varying", { name: "jenis_partus", nullable: true })
  jenisPartus: string | null;

  @Column("character varying", { name: "penolong_partus", nullable: true })
  penolongPartus: string | null;

  @Column("character varying", { name: "nifas", nullable: true })
  nifas: string | null;

  @Column("character varying", { name: "jenkel_anak", nullable: true })
  jenkelAnak: string | null;

  @Column("character varying", { name: "bb_anak", nullable: true })
  bbAnak: string | null;

  @Column("character varying", { name: "keadaan_anak", nullable: true })
  keadaanAnak: string | null;

  @Column("character varying", { name: "keterangan_anak", nullable: true })
  keteranganAnak: string | null;

  @Column("character varying", { name: "nyeri", nullable: true })
  nyeri: string | null;

  @Column("character varying", { name: "nyeri_lokasi", nullable: true })
  nyeriLokasi: string | null;

  @Column("character varying", { name: "nyeri_frekuensi", nullable: true })
  nyeriFrekuensi: string | null;

  @Column("character varying", { name: "nyeri_terbakar", nullable: true })
  nyeriTerbakar: string | null;

  @Column("character varying", { name: "nyeri_tertindih", nullable: true })
  nyeriTertindih: string | null;

  @Column("character varying", { name: "nyeri_menyebar", nullable: true })
  nyeriMenyebar: string | null;

  @Column("character varying", { name: "nyeri_tajam", nullable: true })
  nyeriTajam: string | null;

  @Column("character varying", { name: "nyeri_tumpul", nullable: true })
  nyeriTumpul: string | null;

  @Column("character varying", { name: "nyeri_denyut", nullable: true })
  nyeriDenyut: string | null;

  @Column("character varying", { name: "nyeri_lainnya", nullable: true })
  nyeriLainnya: string | null;

  @Column("character varying", { name: "nyeri_lainnya_ket", nullable: true })
  nyeriLainnyaKet: string | null;

  @Column("character varying", { name: "nyeri_tipe", nullable: true })
  nyeriTipe: string | null;

  @Column("character varying", { name: "nyeri_skala", nullable: true })
  nyeriSkala: string | null;

  @Column("character varying", { name: "nyeri_total_skor", nullable: true })
  nyeriTotalSkor: string | null;

  @Column("character varying", { name: "psikososial", nullable: true })
  psikososial: string | null;

  @Column("character varying", {
    name: "psikososial_hub_keluarga",
    nullable: true,
  })
  psikososialHubKeluarga: string | null;

  @Column("character varying", {
    name: "psikososial_aktifitas_sosial",
    nullable: true,
  })
  psikososialAktifitasSosial: string | null;

  @Column("character varying", {
    name: "psikososial_pelaku_rawat",
    nullable: true,
  })
  psikososialPelakuRawat: string | null;

  @Column("character varying", { name: "eliminasi_bab", nullable: true })
  eliminasiBab: string | null;

  @Column("character varying", {
    name: "eliminasi_frekuensi_bab",
    nullable: true,
  })
  eliminasiFrekuensiBab: string | null;

  @Column("character varying", { name: "eliminasi_colostomy", nullable: true })
  eliminasiColostomy: string | null;

  @Column("character varying", { name: "eliminasi_bak", nullable: true })
  eliminasiBak: string | null;

  @Column("character varying", {
    name: "eliminasi_bak_lainnya",
    nullable: true,
  })
  eliminasiBakLainnya: string | null;

  @Column("character varying", {
    name: "skrining_selera_makan",
    nullable: true,
  })
  skriningSeleraMakan: string | null;

  @Column("character varying", { name: "skrining_turun_berat", nullable: true })
  skriningTurunBerat: string | null;

  @Column("character varying", {
    name: "skrining_nilai_turun_berat",
    nullable: true,
  })
  skriningNilaiTurunBerat: string | null;

  @Column("character varying", { name: "komunikasi_bicara", nullable: true })
  komunikasiBicara: string | null;

  @Column("character varying", {
    name: "komunikasi_bicara_lainnya",
    nullable: true,
  })
  komunikasiBicaraLainnya: string | null;

  @Column("character varying", { name: "komunikasi_hambatan", nullable: true })
  komunikasiHambatan: string | null;

  @Column("character varying", {
    name: "komunikasi_hambatan_lainnya",
    nullable: true,
  })
  komunikasiHambatanLainnya: string | null;

  @Column("character varying", {
    name: "komunikasi_kebutuhan_belajar",
    nullable: true,
  })
  komunikasiKebutuhanBelajar: string | null;

  @Column("character varying", {
    name: "komunikasi_kebutuhan_belajar_lainnya",
    nullable: true,
  })
  komunikasiKebutuhanBelajarLainnya: string | null;

  @Column("character varying", {
    name: "kaji_resiko_sempoyongan",
    nullable: true,
  })
  kajiResikoSempoyongan: string | null;

  @Column("character varying", { name: "kaji_resiko_penopang", nullable: true })
  kajiResikoPenopang: string | null;

  @Column("character varying", {
    name: "kaji_resiko_ke_dokter",
    nullable: true,
  })
  kajiResikoKeDokter: string | null;

  @Column("character varying", {
    name: "kaji_resiko_jam_dokter",
    nullable: true,
  })
  kajiResikoJamDokter: string | null;

  @Column("character varying", { name: "diagnosa_nyeri", nullable: true })
  diagnosaNyeri: string | null;

  @Column("character varying", { name: "diagnosa_pola_tidur", nullable: true })
  diagnosaPolaTidur: string | null;

  @Column("character varying", { name: "diagnosa_mobilitas", nullable: true })
  diagnosaMobilitas: string | null;

  @Column("character varying", { name: "diagnosa_cedera", nullable: true })
  diagnosaCedera: string | null;

  @Column("character varying", { name: "diagnosa_rawat_diri", nullable: true })
  diagnosaRawatDiri: string | null;

  @Column("character varying", { name: "diagnosa_kulit", nullable: true })
  diagnosaKulit: string | null;

  @Column("character varying", { name: "diagnosa_suhu", nullable: true })
  diagnosaSuhu: string | null;

  @Column("character varying", { name: "diagnosa_eliminasi", nullable: true })
  diagnosaEliminasi: string | null;

  @Column("character varying", { name: "diagnosa_pengetahuan", nullable: true })
  diagnosaPengetahuan: string | null;

  @Column("character varying", { name: "diagnosa_nutrisi", nullable: true })
  diagnosaNutrisi: string | null;

  @Column("character varying", { name: "diagnosa_cairan", nullable: true })
  diagnosaCairan: string | null;

  @Column("character varying", { name: "diagnosa_perifer", nullable: true })
  diagnosaPerifer: string | null;

  @Column("character varying", { name: "diagnosa_nafas", nullable: true })
  diagnosaNafas: string | null;

  @Column("character varying", { name: "diagnosa_infeksi", nullable: true })
  diagnosaInfeksi: string | null;

  @Column("character varying", { name: "tatalaksana_hub_baik", nullable: true })
  tatalaksanaHubBaik: string | null;

  @Column("character varying", {
    name: "tatalaksana_terapeutik",
    nullable: true,
  })
  tatalaksanaTerapeutik: string | null;

  @Column("character varying", {
    name: "tatalaksana_lingkungan",
    nullable: true,
  })
  tatalaksanaLingkungan: string | null;

  @Column("character varying", { name: "tatalaksana_timbang", nullable: true })
  tatalaksanaTimbang: string | null;

  @Column("character varying", {
    name: "tatalaksana_ukur_tinggi",
    nullable: true,
  })
  tatalaksanaUkurTinggi: string | null;

  @Column("character varying", {
    name: "tatalaksana_kaji_vital",
    nullable: true,
  })
  tatalaksanaKajiVital: string | null;

  @Column("character varying", { name: "tatalaksana_oral", nullable: true })
  tatalaksanaOral: string | null;

  @Column("character varying", {
    name: "tatalaksana_bersih_luka",
    nullable: true,
  })
  tatalaksanaBersihLuka: string | null;

  @Column("character varying", {
    name: "tatalaksana_buka_jahit",
    nullable: true,
  })
  tatalaksanaBukaJahit: string | null;

  @Column("character varying", { name: "tatalaksana_suction", nullable: true })
  tatalaksanaSuction: string | null;

  @Column("character varying", { name: "tatalaksana_insisi", nullable: true })
  tatalaksanaInsisi: string | null;

  @Column("character varying", {
    name: "tatalaksana_siapkan_obat",
    nullable: true,
  })
  tatalaksanaSiapkanObat: string | null;

  @Column("character varying", {
    name: "tatalaksana_siapkan_obat_ket",
    nullable: true,
  })
  tatalaksanaSiapkanObatKet: string | null;

  @Column("character varying", {
    name: "tatalaksana_beri_obat",
    nullable: true,
  })
  tatalaksanaBeriObat: string | null;

  @Column("character varying", {
    name: "tatalaksana_beri_obat_ket",
    nullable: true,
  })
  tatalaksanaBeriObatKet: string | null;

  @Column("character varying", { name: "tatalaksana_konsul", nullable: true })
  tatalaksanaKonsul: string | null;

  @Column("character varying", {
    name: "tatalaksana_konsul_ket",
    nullable: true,
  })
  tatalaksanaKonsulKet: string | null;

  @Column("character varying", { name: "tindak_lanjut", nullable: true })
  tindakLanjut: string | null;

  @Column("text", { name: "tindak_lanjut_ket", nullable: true })
  tindakLanjutKet: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("uuid", { name: "asesmen", nullable: true })
  asesmen: string | null;

  @Column("uuid", { name: "kunjungan", nullable: true })
  kunjungan: string | null;

  @Column("character varying", {
    name: "tinggi_badan",
    nullable: true,
    length: 20,
  })
  tinggiBadan: string | null;

  @Column("character varying", {
    name: "berat_badan",
    nullable: true,
    length: 20,
  })
  beratBadan: string | null;

  @Column("character varying", {
    name: "status_pernikahan",
    nullable: true,
    length: 20,
  })
  statusPernikahan: string | null;

  @Column("character varying", {
    name: "kali_nikah",
    nullable: true,
    length: 20,
  })
  kaliNikah: string | null;

  @Column("character varying", { name: "umur_nikah", nullable: true })
  umurNikah: string | null;
}
