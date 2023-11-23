import { Option } from './types/input';
import { LevelKop, SuratBiasa } from './types/surat';

export const levelKopOptions: Option[] = [
  {
    value: LevelKop.Sekda,
    label: LevelKop.Sekda,
  },
  {
    value: LevelKop.Dinas,
    label: LevelKop.Dinas,
  },
  {
    value: LevelKop.UPTD,
    label: LevelKop.UPTD,
  },
];

export const tipeTujuanOptions: Option[] = [
  {
    value: 'Kepala Surat',
    label: 'Kepala Surat',
  },
  {
    value: 'Lampiran',
    label: 'Lampiran',
  },
];

export const personOptions: Option[] = [
  {
    value: 'Person 1',
    label: 'Person 1',
  },
  {
    value: 'Person 2',
    label: 'Person 2',
  },
  {
    value: 'Person 3',
    label: 'Person 3',
  },
];

export const penandatanganOptions: Option[] = [
  {
    value: {
      nama: 'Person 1',
      jabatan: 'Jabatan A',
      pangkat: 'Pangkat A',
    },
    label: 'Person 1',
  },
  {
    value: {
      nama: 'Person 2',
      jabatan: 'Jabatan B',
      pangkat: 'Pangkat B',
    },
    label: 'Person 2',
  },
  {
    value: {
      nama: 'Person 3',
      jabatan: 'Jabatan C',
      pangkat: 'Pangkat C',
    },
    label: 'Person 3',
  },
];

export const kodeKlasifikasiOptions: Option[] = [
  {
    value: 'Klasifikasi A',
    label: 'Klasifikasi A',
  },
  {
    value: 'Klasifikasi B',
    label: 'Klasifikasi B',
  },
  {
    value: 'Klasifikasi C',
    label: 'Klasifikasi C',
  },
];

export const sifatSuratOptions: Option[] = [
  {
    value: 'Biasa',
    label: 'Biasa',
  },
  {
    value: 'Konfidensial',
    label: 'Konfidensial',
  },
  {
    value: 'Penting',
    label: 'Penting',
  },
  {
    value: 'Rahasia',
    label: 'Rahasia',
  },
  {
    value: 'Sangat Rahasia',
    label: 'Sangat Rahasia',
  },
];

export const urgensiOptions: Option[] = [
  {
    value: 'Amat Segera',
    label: 'Amat Segera',
  },
  {
    value: 'Biasa',
    label: 'Biasa',
  },
  {
    value: 'Penting',
    label: 'Penting',
  },
  {
    value: 'Segera',
    label: 'Segera',
  },
];

export const initialSuratBiasa: SuratBiasa = {
  levelSurat: LevelKop.Dinas,
  uptd: '',
  tanggalPenulisan: new Date(),
  tempatPenulisan: 'Bandung',
  tipeTujuan: tipeTujuanOptions[0].value,
  tujuan: '',
  lokasiTujuan: '',
  kodeKlasifikasi: '',
  unitPengolah: '',
  sifatSurat: '',
  urgensi: '',
  perihal: '',
  body: '',
  penandatangan: null,
  pemeriksa: '',
  tembusan: [],
};
