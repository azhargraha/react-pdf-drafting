import { initialSurat } from '@/dummy';
import { Action } from '@/types/reducer';
import {
  LampiranCustom,
  SuratReducerState,
  SuratBiasa,
  Surat,
  LampiranSurat,
} from '@/types/surat';

export enum SuratAction {
  LevelSurat = 'SET_LEVEL_SURAT',
  Uptd = 'SET_UPTD',
  TempatPenulisan = 'SET_TEMPAT_PENULISAN',
  TipeTujuan = 'SET_TIPE_TUJUAN',
  Penerima = 'SET_PENERIMA',
  LokasiTujuan = 'SET_LOKASI_TUJUAN',
  KodeKlasifikasi = 'SET_KODE_KLASIFIKASI',
  UnitPengolah = 'SET_UNIT_PENGOLAH',
  SifatSurat = 'SET_SIFAT_SURAT',
  Urgensi = 'SET_URGENSI',
  Perihal = 'SET_PERIHAL',
  Body = 'SET_BODY',
  Penandatangan = 'SET_PENANDATANGAN',
  Pemeriksa = 'SET_PEMERIKSA',
  Tembusan = 'SET_TEMBUSAN',
  Dasar = 'SET_DASAR',

  Reset = 'RESET_SURAT',
}

export enum LampiranAction {
  Add = 'ADD_LAMPIRAN',
  Set = 'SET_LAMPIRAN',
  Delete = 'DELETE_LAMPIRAN',
  Reset = 'RESET_LAMPIRAN',
}

export enum FileAction {
  Set = 'SET_FILE',
  Delete = 'DELETE_FILE',
}

export const suratReducer = (
  state: SuratReducerState,
  action: Action<
    SuratAction | LampiranAction,
    Partial<SuratReducerState & LampiranCustom & { idx: number }>
  >
) => {
  switch (action.type) {
    case SuratAction.LevelSurat: {
      if (!action?.payload?.levelSurat) return state;

      return {
        ...state,
        levelSurat: action?.payload?.levelSurat,
      } as SuratReducerState;
    }
    case SuratAction.Uptd: {
      if (!action?.payload?.uptd) return state;

      return {
        ...state,
        uptd: action?.payload?.uptd,
      } as SuratReducerState;
    }
    case SuratAction.TempatPenulisan: {
      if (!action?.payload?.tempatPenulisan) return state;

      return {
        ...state,
        tempatPenulisan: action?.payload?.tempatPenulisan,
      } as SuratReducerState;
    }
    case SuratAction.TipeTujuan: {
      if (!action?.payload?.tipeTujuan) return state;

      return {
        ...state,
        tipeTujuan: action?.payload?.tipeTujuan,
      } as SuratReducerState;
    }
    case SuratAction.Penerima: {
      if (!action?.payload?.penerima) return state;

      return {
        ...state,
        penerima: action?.payload?.penerima,
      } as SuratReducerState;
    }
    case SuratAction.LokasiTujuan: {
      if (!action?.payload?.lokasiTujuan) return state;

      return {
        ...state,
        lokasiTujuan: action?.payload?.lokasiTujuan,
      } as SuratReducerState;
    }
    case SuratAction.KodeKlasifikasi: {
      if (!action?.payload?.kodeKlasifikasi) return state;

      return {
        ...state,
        kodeKlasifikasi: action?.payload?.kodeKlasifikasi,
      } as SuratReducerState;
    }
    case SuratAction.UnitPengolah: {
      if (!action?.payload?.unitPengolah) return state;

      return {
        ...state,
        unitPengolah: action?.payload?.unitPengolah,
      } as SuratReducerState;
    }
    case SuratAction.SifatSurat: {
      if (!action?.payload?.sifatSurat) return state;

      return {
        ...state,
        sifatSurat: action?.payload?.sifatSurat,
      } as SuratReducerState;
    }
    case SuratAction.Urgensi: {
      if (!action?.payload?.urgensi) return state;

      return {
        ...state,
        urgensi: action?.payload?.urgensi,
      } as SuratReducerState;
    }
    case SuratAction.Perihal: {
      if (!action?.payload?.perihal) return state;

      return {
        ...state,
        perihal: action.payload.perihal,
      } as SuratReducerState;
    }
    case SuratAction.Body: {
      if (!action?.payload?.body) return state;

      return {
        ...state,
        body: action.payload.body,
      } as SuratReducerState;
    }
    case SuratAction.Penandatangan: {
      if (!action?.payload?.penandatangan) return state;

      return {
        ...state,
        penandatangan: action.payload.penandatangan,
      } as SuratReducerState;
    }
    case SuratAction.Pemeriksa: {
      if (!action?.payload?.pemeriksa) return state;

      return {
        ...state,
        pemeriksa: action.payload.pemeriksa,
      } as SuratReducerState;
    }
    case SuratAction.Tembusan: {
      if (!action?.payload?.tembusan) return state;

      return {
        ...state,
        tembusan: action.payload.tembusan,
      } as SuratReducerState;
    }
    case SuratAction.Dasar: {
      if (!action?.payload?.dasar) return state;

      return {
        ...state,
        dasar: action.payload.dasar,
      } as SuratReducerState;
    }

    case LampiranAction.Add: {
      const newLampiran = [
        ...state.lampiran,
        {
          id: `lampiran-${Math.random()}`,
          body: '',
        },
      ];

      return {
        ...state,
        lampiran: newLampiran,
      } as SuratReducerState;
    }
    case LampiranAction.Set: {
      if (!action?.payload?.id) return state;

      const newLampiran = state.lampiran.map((lampiran) => {
        if (action.payload?.id !== lampiran.id) return lampiran;

        return {
          ...lampiran,
          body: action.payload.body,
        } as LampiranCustom;
      });

      return {
        ...state,
        lampiran: newLampiran,
      } as SuratReducerState;
    }
    case LampiranAction.Delete: {
      if (!action?.payload?.id) return state;

      const newLampiran = state.lampiran.filter(
        (lampiran) => lampiran.id !== action.payload?.id
      );

      return {
        ...state,
        lampiran: newLampiran,
      } as SuratReducerState;
    }
    case LampiranAction.Reset: {
      return {
        ...state,
        lampiran: [],
      } as SuratReducerState;
    }

    case SuratAction.Reset: {
      return initialSurat;
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};
