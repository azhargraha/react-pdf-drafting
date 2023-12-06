import { Option } from './types/input';
import {
  LevelKop,
  Employee,
  SuratBiasa,
  SuratReducerState,
} from './types/surat';

export const levelKopOptions: Option<LevelKop>[] = [
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

export const tipeTujuanOptions: Option<string>[] = [
  {
    value: 'Kepala Surat',
    label: 'Kepala Surat',
  },
  {
    value: 'Lampiran',
    label: 'Lampiran',
  },
];

export const employeeOptions: Option<string, Employee>[] = [
  {
    label: 'John Doe',
    value: {
      nama: 'John Doe',
      jabatan: 'Manager',
      NIP: '123456789012345678',
      pangkat: 'Pangkat A',
    },
  },
  {
    label: 'Jane Smith',
    value: {
      nama: 'Jane Smith',
      jabatan: 'Supervisor',
      NIP: '234567890123456789',
      pangkat: 'Pangkat B',
    },
  },
  {
    label: 'Michael Johnson',
    value: {
      nama: 'Michael Johnson',
      jabatan: 'Engineer',
      NIP: '345678901234567890',
      pangkat: 'Pangkat A',
    },
  },
  {
    label: 'Emily Davis',
    value: {
      nama: 'Emily Davis',
      jabatan: 'Manager',
      NIP: '456789012345678901',
      pangkat: 'Pangkat C',
    },
  },
  {
    label: 'Daniel White',
    value: {
      nama: 'Daniel White',
      jabatan: 'Supervisor',
      NIP: '567890123456789012',
      pangkat: 'Pangkat A',
    },
  },
  {
    label: 'Sophia Brown',
    value: {
      nama: 'Sophia Brown',
      jabatan: 'Engineer',
      NIP: '678901234567890123',
      pangkat: 'Pangkat B',
    },
  },
  {
    label: 'William Taylor',
    value: {
      nama: 'William Taylor',
      jabatan: 'Manager',
      NIP: '789012345678901234',
      pangkat: 'Pangkat A',
    },
  },
  {
    label: 'Olivia Anderson',
    value: {
      nama: 'Olivia Anderson',
      jabatan: 'Supervisor',
      NIP: '890123456789012345',
      pangkat: 'Pangkat C',
    },
  },
  {
    label: 'Liam Martinez',
    value: {
      nama: 'Liam Martinez',
      jabatan: 'Engineer',
      NIP: '901234567890123456',
      pangkat: 'Pangkat A',
    },
  },
  {
    label: 'Ava Wilson',
    value: {
      nama: 'Ava Wilson',
      jabatan: 'Manager',
      NIP: '012345678901234567',
      pangkat: 'Pangkat B',
    },
  },
  {
    label: 'Ethan Thomas',
    value: {
      nama: 'Ethan Thomas',
      jabatan: 'Supervisor',
      NIP: '112233445566778899',
      pangkat: 'Pangkat A',
    },
  },
  {
    label: 'Mia Walker',
    value: {
      nama: 'Mia Walker',
      jabatan: 'Engineer',
      NIP: '998877665544332211',
      pangkat: 'Pangkat C',
    },
  },
  {
    label: 'James Turner',
    value: {
      nama: 'James Turner',
      jabatan: 'Manager',
      NIP: '987654321098765432',
      pangkat: 'Pangkat A',
    },
  },
  {
    label: 'Emma Harris',
    value: {
      nama: 'Emma Harris',
      jabatan: 'Supervisor',
      NIP: '876543210987654321',
      pangkat: 'Pangkat B',
    },
  },
  {
    label: 'Noah Clark',
    value: {
      nama: 'Noah Clark',
      jabatan: 'Engineer',
      NIP: '765432109876543210',
      pangkat: 'Pangkat A',
    },
  },
  {
    label: 'Isabella Turner',
    value: {
      nama: 'Isabella Turner',
      jabatan: 'Manager',
      NIP: '654321098765432109',
      pangkat: 'Pangkat C',
    },
  },
  {
    label: 'Sophia Johnson',
    value: {
      nama: 'Sophia Johnson',
      jabatan: 'Supervisor',
      NIP: '543210987654321098',
      pangkat: 'Pangkat A',
    },
  },
  {
    label: 'Elijah Adams',
    value: {
      nama: 'Elijah Adams',
      jabatan: 'Engineer',
      NIP: '432109876543210987',
      pangkat: 'Pangkat B',
    },
  },
  {
    label: 'Ava Martin',
    value: {
      nama: 'Ava Martin',
      jabatan: 'Manager',
      NIP: '321098765432109876',
      pangkat: 'Pangkat A',
    },
  },
  {
    label: 'Jackson Thomas',
    value: {
      nama: 'Jackson Thomas',
      jabatan: 'Supervisor',
      NIP: '210987654321098765',
      pangkat: 'Pangkat C',
    },
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

export const initialSurat: SuratReducerState = {
  levelSurat: LevelKop.Dinas,
  uptd: '',
  tanggalPenulisan: new Date(),
  tempatPenulisan: 'Bandung',
  tipeTujuan: tipeTujuanOptions[0].value,
  penerima: [],
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
  lampiran: [],
  files: [],
  dasar: '',
};
