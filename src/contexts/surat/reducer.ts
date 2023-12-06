import { Action } from '@/types/reducer';
import { LampiranCustom, SuratBiasa } from '@/types/surat';

export enum SuratBiasaSetAction {
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
}

export enum LampiranAction {
  Add = 'ADD_LAMPIRAN',
  Set = 'SET_LAMPIRAN',
  Delete = 'DELETE_LAMPIRAN',
}

export enum FileAction {
  Set = 'SET_FILE',
  Delete = 'DELETE_FILE',
}

export const suratBiasaReducer = (
  state: SuratBiasa,
  action: Action<
    SuratBiasaSetAction | LampiranAction,
    Partial<SuratBiasa & LampiranCustom & { idx: number }>
  >
) => {
  switch (action.type) {
    case SuratBiasaSetAction.LevelSurat: {
      return {
        ...state,
        levelSurat: action?.payload?.levelSurat,
      } as SuratBiasa;
    }
    case SuratBiasaSetAction.Uptd: {
      return {
        ...state,
        uptd: action?.payload?.uptd,
      } as SuratBiasa;
    }
    case SuratBiasaSetAction.TempatPenulisan: {
      return {
        ...state,
        tempatPenulisan: action?.payload?.tempatPenulisan,
      } as SuratBiasa;
    }
    case SuratBiasaSetAction.TipeTujuan: {
      return {
        ...state,
        tipeTujuan: action?.payload?.tipeTujuan,
      } as SuratBiasa;
    }
    case SuratBiasaSetAction.Penerima: {
      return {
        ...state,
        penerima: action?.payload?.penerima,
      } as SuratBiasa;
    }
    case SuratBiasaSetAction.LokasiTujuan: {
      return {
        ...state,
        lokasiTujuan: action?.payload?.lokasiTujuan,
      } as SuratBiasa;
    }
    case SuratBiasaSetAction.KodeKlasifikasi: {
      return {
        ...state,
        kodeKlasifikasi: action?.payload?.kodeKlasifikasi,
      } as SuratBiasa;
    }
    case SuratBiasaSetAction.UnitPengolah: {
      return {
        ...state,
        unitPengolah: action?.payload?.unitPengolah,
      } as SuratBiasa;
    }
    case SuratBiasaSetAction.SifatSurat: {
      return {
        ...state,
        sifatSurat: action?.payload?.sifatSurat,
      } as SuratBiasa;
    }
    case SuratBiasaSetAction.Urgensi: {
      return {
        ...state,
        urgensi: action?.payload?.urgensi,
      } as SuratBiasa;
    }
    case SuratBiasaSetAction.Perihal: {
      return {
        ...state,
        perihal: action?.payload?.perihal,
      } as SuratBiasa;
    }
    case SuratBiasaSetAction.Body: {
      return {
        ...state,
        body: action?.payload?.body,
      } as SuratBiasa;
    }
    case SuratBiasaSetAction.Penandatangan: {
      return {
        ...state,
        penandatangan: action?.payload?.penandatangan,
      } as SuratBiasa;
    }
    case SuratBiasaSetAction.Pemeriksa: {
      if (!action?.payload?.pemeriksa) return state;

      return {
        ...state,
        pemeriksa: action.payload.pemeriksa,
      } as SuratBiasa;
    }
    case SuratBiasaSetAction.Tembusan: {
      if (!action?.payload?.tembusan) return state;

      return {
        ...state,
        tembusan: action.payload.tembusan,
      } as SuratBiasa;
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
      } as SuratBiasa;
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
      } as SuratBiasa;
    }
    case LampiranAction.Delete: {
      if (!action?.payload?.id) return state;

      const newLampiran = state.lampiran.filter(
        (lampiran) => lampiran.id !== action.payload?.id
      );

      return {
        ...state,
        lampiran: newLampiran,
      } as SuratBiasa;
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};
