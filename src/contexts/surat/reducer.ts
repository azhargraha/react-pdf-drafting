import { initialSurat } from '@/dummy';
import { Action } from '@/types/reducer';
import { LampiranCustom, LampiranFile, SuratReducerState } from '@/types/surat';

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
    SuratAction | LampiranAction | FileAction,
    Partial<
      SuratReducerState & LampiranCustom & { idx: number; uploadFiles: File[] }
    >
  >
) => {
  switch (action.type) {
    case SuratAction.LevelSurat: {
      return {
        ...state,
        levelSurat: action?.payload?.levelSurat,
      } as SuratReducerState;
    }
    case SuratAction.Uptd: {
      return {
        ...state,
        uptd: action?.payload?.uptd,
      } as SuratReducerState;
    }
    case SuratAction.TempatPenulisan: {
      return {
        ...state,
        tempatPenulisan: action?.payload?.tempatPenulisan,
      } as SuratReducerState;
    }
    case SuratAction.TipeTujuan: {
      return {
        ...state,
        tipeTujuan: action?.payload?.tipeTujuan,
      } as SuratReducerState;
    }
    case SuratAction.Penerima: {
      return {
        ...state,
        penerima: action?.payload?.penerima,
      } as SuratReducerState;
    }
    case SuratAction.LokasiTujuan: {
      return {
        ...state,
        lokasiTujuan: action?.payload?.lokasiTujuan,
      } as SuratReducerState;
    }
    case SuratAction.KodeKlasifikasi: {
      return {
        ...state,
        kodeKlasifikasi: action?.payload?.kodeKlasifikasi,
      } as SuratReducerState;
    }
    case SuratAction.UnitPengolah: {
      return {
        ...state,
        unitPengolah: action?.payload?.unitPengolah,
      } as SuratReducerState;
    }
    case SuratAction.SifatSurat: {
      return {
        ...state,
        sifatSurat: action?.payload?.sifatSurat,
      } as SuratReducerState;
    }
    case SuratAction.Urgensi: {
      return {
        ...state,
        urgensi: action?.payload?.urgensi,
      } as SuratReducerState;
    }
    case SuratAction.Perihal: {
      return {
        ...state,
        perihal: action?.payload?.perihal,
      } as SuratReducerState;
    }
    case SuratAction.Body: {
      return {
        ...state,
        body: action?.payload?.body,
      } as SuratReducerState;
    }
    case SuratAction.Penandatangan: {
      return {
        ...state,
        penandatangan: action?.payload?.penandatangan,
      } as SuratReducerState;
    }
    case SuratAction.Pemeriksa: {
      return {
        ...state,
        pemeriksa: action?.payload?.pemeriksa,
      } as SuratReducerState;
    }
    case SuratAction.Tembusan: {
      return {
        ...state,
        tembusan: action?.payload?.tembusan,
      } as SuratReducerState;
    }
    case SuratAction.Dasar: {
      return {
        ...state,
        dasar: action?.payload?.dasar,
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

    case FileAction.Set: {
      if (!action?.payload?.uploadFiles) return state;

      const newFile = [
        ...state.files,
        ...action.payload.uploadFiles.map(
          (file) =>
            ({
              id: `file-${Math.random()}`,
              file: file,
            } as LampiranFile)
        ),
      ];

      return {
        ...state,
        files: newFile,
      } as SuratReducerState;
    }
    case FileAction.Delete: {
      if (!action?.payload?.id) return state;

      const newFiles = state.files.filter(
        (file) => file.id !== action.payload?.id
      );

      return {
        ...state,
        files: newFiles,
      } as SuratReducerState;
    }

    case SuratAction.Reset: {
      return initialSurat;
    }
    case LampiranAction.Reset: {
      return {
        ...state,
        lampiran: [],
        files: [],
      } as SuratReducerState;
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};
