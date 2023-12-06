import { Dispatch, SetStateAction } from 'react';

// component
export interface SuratProps<TData> {
  isPreview?: boolean;
  data: Partial<TData>;
  setContentForm?: Dispatch<SetStateAction<ContentSectionForm | null>>;
}

// data
export interface Surat {
  levelSurat: LevelKop;
  uptd: string;
  tanggalPenulisan: Date;
  tempatPenulisan: string;
  tipeTujuan: string;
  penerima: Employee[];
  lokasiTujuan: string;
  kodeKlasifikasi: string;
  unitPengolah: string;
  sifatSurat: string;
  urgensi: string;
  perihal: string;
  body: string;
  penandatangan: Employee | null;
  pemeriksa: Employee[];
  tembusan: Employee[];
}

export type LampiranFile = File;

export type LampiranCustom = {
  id: string;
  body: string;
};
export interface LampiranSurat {
  lampiran: LampiranCustom[];
  files: LampiranFile[];
}

export interface SuratBiasa extends Surat, LampiranSurat {}

export interface SuratPerintah extends Omit<Surat, 'tembusan'> {
  dasar: string;
}

export type Employee = {
  nama: string;
  jabatan: string;
  NIP: string;
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

export type LampiranSectionForm = {
  section: ContentSectionForm.Lampiran;
  id: LampiranCustom['id'];
};
