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
  {
    value: 'Person 4',
    label: 'Person 4',
  },
  {
    value: 'Person 5',
    label: 'Person 5',
  },
  {
    value: 'Person 6',
    label: 'Person 6',
  },
  {
    value: 'Person 7',
    label: 'Person 7',
  },
  {
    value: 'Person 8',
    label: 'Person 8',
  },
  {
    value: 'Person 9',
    label: 'Person 9',
  },
  {
    value: 'Person 10',
    label: 'Person 10',
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
  {
    value: {
      nama: 'Person 4',
      jabatan: 'Jabatan D',
      pangkat: 'Pangkat D',
    },
    label: 'Person 4',
  },
  {
    value: {
      nama: 'Person 5',
      jabatan: 'Jabatan E',
      pangkat: 'Pangkat E',
    },
    label: 'Person 5',
  },
  {
    value: {
      nama: 'Person 6',
      jabatan: 'Jabatan F',
      pangkat: 'Pangkat F',
    },
    label: 'Person 6',
  },
  {
    value: {
      nama: 'Person 7',
      jabatan: 'Jabatan G',
      pangkat: 'Pangkat G',
    },
    label: 'Person 7',
  },
  {
    value: {
      nama: 'Person 8',
      jabatan: 'Jabatan H',
      pangkat: 'Pangkat H',
    },
    label: 'Person 8',
  },
  {
    value: {
      nama: 'Person 9',
      jabatan: 'Jabatan I',
      pangkat: 'Pangkat I',
    },
    label: 'Person 9',
  },
  {
    value: {
      nama: 'Person 10',
      jabatan: 'Jabatan J',
      pangkat: 'Pangkat J',
    },
    label: 'Person 10',
  },
  {
    value: {
      nama: 'Person 11',
      jabatan: 'Jabatan K',
      pangkat: 'Pangkat K',
    },
    label: 'Person 11',
  },
  {
    value: {
      nama: 'Person 12',
      jabatan: 'Jabatan L',
      pangkat: 'Pangkat L',
    },
    label: 'Person 12',
  },
  {
    value: {
      nama: 'Person 13',
      jabatan: 'Jabatan M',
      pangkat: 'Pangkat M',
    },
    label: 'Person 13',
  },
  {
    value: {
      nama: 'Person 14',
      jabatan: 'Jabatan N',
      pangkat: 'Pangkat N',
    },
    label: 'Person 14',
  },
  {
    value: {
      nama: 'Person 15',
      jabatan: 'Jabatan O',
      pangkat: 'Pangkat O',
    },
    label: 'Person 15',
  },
  {
    value: {
      nama: 'Person 16',
      jabatan: 'Jabatan P',
      pangkat: 'Pangkat P',
    },
    label: 'Person 16',
  },
  {
    value: {
      nama: 'Person 17',
      jabatan: 'Jabatan Q',
      pangkat: 'Pangkat Q',
    },
    label: 'Person 17',
  },
  {
    value: {
      nama: 'Person 18',
      jabatan: 'Jabatan R',
      pangkat: 'Pangkat R',
    },
    label: 'Person 18',
  },
  {
    value: {
      nama: 'Person 19',
      jabatan: 'Jabatan S',
      pangkat: 'Pangkat S',
    },
    label: 'Person 19',
  },
  {
    value: {
      nama: 'Person 20',
      jabatan: 'Jabatan T',
      pangkat: 'Pangkat T',
    },
    label: 'Person 20',
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
  pemeriksa: [],
  tembusan: [],
};
