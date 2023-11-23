export type SuratBiasa = {
  levelSurat: LevelKop;
  uptd: string;
  tanggalPenulisan: Date;
  tempatPenulisan: string;
  tipeTujuan: string;
  tujuan: string;
  lokasiTujuan: string;
  kodeKlasifikasi: string;
  unitPengolah: string;
  sifatSurat: string;
  urgensi: string;
  perihal: string;
  body: string;
  penandatangan: Penandatangan | null;
  pemeriksa: string;
  tembusan: string[];
};

export type Penandatangan = {
  nama: string;
  jabatan: string;
  pangkat: string;
};

export enum LevelKop {
  Sekda = 'Sekertaris Daerah',
  Dinas = 'Dinas/Badan',
  UPTD = 'UPTD/Cabang Dinas',
}

export enum ContentSectionForm {
  Kop = 'Kop Surat',
  Kepala = 'Kepala Surat',
  Badan = 'Badan Naskah',
  Kaki = 'Kaki Surat',
  Lampiran = 'Lampiran',
}
