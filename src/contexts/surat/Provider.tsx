import React, {
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from 'react';

import { initialSurat } from '@/dummy';
import {
  LampiranCustom,
  LampiranSurat,
  SuratReducerState,
} from '@/types/surat';
import { LampiranAction, SuratAction, suratReducer } from './reducer';

export type SuratContextType = {
  state: Partial<SuratReducerState>;
  dispatch: {
    setLevelSurat: (payload: SuratReducerState['levelSurat']) => void;
    setUptd: (payload: SuratReducerState['uptd']) => void;
    setTempatPenulisan: (payload: SuratReducerState['tempatPenulisan']) => void;
    setTipeTujuan: (payload: SuratReducerState['tipeTujuan']) => void;
    setPenerima: (payload: SuratReducerState['penerima']) => void;
    setLokasiTujuan: (payload: SuratReducerState['lokasiTujuan']) => void;
    setKodeKlasifikasi: (payload: SuratReducerState['kodeKlasifikasi']) => void;
    setUnitPengolah: (payload: SuratReducerState['unitPengolah']) => void;
    setSifatSurat: (payload: SuratReducerState['sifatSurat']) => void;
    setUrgensi: (payload: SuratReducerState['urgensi']) => void;
    setPerihal: (payload: SuratReducerState['perihal']) => void;
    setBody: (payload: SuratReducerState['body']) => void;
    setPenandatangan: (payload: SuratReducerState['penandatangan']) => void;
    setPemeriksa: (payload: SuratReducerState['pemeriksa']) => void;
    setTembusan: (payload: SuratReducerState['tembusan']) => void;
    addLampiran: () => void;
    setLampiran: (payload: LampiranCustom) => void;
    deleteLampiran: (id: LampiranCustom['id']) => void;
    setFile: (payload: LampiranSurat['files']) => void;
    deleteFile: (idx: number) => void;
    setDasar: (payload: SuratReducerState['dasar']) => void;
    resetSurat: () => void;
  };
};

export const SuratContext: React.Context<SuratContextType> = createContext(
  {} as SuratContextType
);

interface SuratProviderProps {
  children: ReactNode | ReactElement;
}

const SuratProvider: React.FC<SuratProviderProps> = ({ children }) => {
  const [surat, dispatch] = useReducer(suratReducer, initialSurat);

  const setLevelSurat = (payload: SuratReducerState['levelSurat']) => {
    dispatch({
      type: SuratAction.LevelSurat,
      payload: {
        levelSurat: payload,
      },
    });
  };

  const setUptd = (payload: SuratReducerState['uptd']) => {
    dispatch({
      type: SuratAction.Uptd,
      payload: {
        uptd: payload,
      },
    });
  };

  const setTempatPenulisan = (
    payload: SuratReducerState['tempatPenulisan']
  ) => {
    dispatch({
      type: SuratAction.TempatPenulisan,
      payload: {
        tempatPenulisan: payload,
      },
    });
  };

  const setTipeTujuan = (payload: SuratReducerState['tipeTujuan']) => {
    dispatch({
      type: SuratAction.TipeTujuan,
      payload: {
        tipeTujuan: payload,
      },
    });
  };

  const setPenerima = (payload: SuratReducerState['penerima']) => {
    dispatch({
      type: SuratAction.Penerima,
      payload: {
        penerima: payload,
      },
    });
  };

  const setLokasiTujuan = (payload: SuratReducerState['lokasiTujuan']) => {
    dispatch({
      type: SuratAction.LokasiTujuan,
      payload: {
        lokasiTujuan: payload,
      },
    });
  };

  const setKodeKlasifikasi = (
    payload: SuratReducerState['kodeKlasifikasi']
  ) => {
    dispatch({
      type: SuratAction.KodeKlasifikasi,
      payload: {
        kodeKlasifikasi: payload,
      },
    });
  };

  const setUnitPengolah = (payload: SuratReducerState['unitPengolah']) => {
    dispatch({
      type: SuratAction.UnitPengolah,
      payload: {
        unitPengolah: payload,
      },
    });
  };

  const setSifatSurat = (payload: SuratReducerState['sifatSurat']) => {
    dispatch({
      type: SuratAction.SifatSurat,
      payload: {
        sifatSurat: payload,
      },
    });
  };

  const setUrgensi = (payload: SuratReducerState['urgensi']) => {
    dispatch({
      type: SuratAction.Urgensi,
      payload: {
        urgensi: payload,
      },
    });
  };

  const setPerihal = (payload: SuratReducerState['perihal']) => {
    dispatch({
      type: SuratAction.Perihal,
      payload: {
        perihal: payload,
      },
    });
  };

  const setBody = (payload: SuratReducerState['body']) => {
    dispatch({
      type: SuratAction.Body,
      payload: {
        body: payload,
      },
    });
  };

  const setPenandatangan = (payload: SuratReducerState['penandatangan']) => {
    dispatch({
      type: SuratAction.Penandatangan,
      payload: {
        penandatangan: payload,
      },
    });
  };

  const setPemeriksa = (payload: SuratReducerState['pemeriksa']) => {
    dispatch({
      type: SuratAction.Pemeriksa,
      payload: {
        pemeriksa: payload,
      },
    });
  };

  const setTembusan = (payload: SuratReducerState['tembusan']) => {
    dispatch({
      type: SuratAction.Tembusan,
      payload: {
        tembusan: payload,
      },
    });
  };

  const addLampiran = () => {
    dispatch({
      type: LampiranAction.Add,
    });
  };

  const setLampiran = (payload: LampiranCustom) => {
    dispatch({
      type: LampiranAction.Set,
      payload,
    });
  };

  const deleteLampiran = (id: LampiranCustom['id']) => {
    dispatch({
      type: LampiranAction.Delete,
      payload: {
        id,
      },
    });
  };

  const setFile = (payload: LampiranSurat['files']) => {
    dispatch({
      type: LampiranAction.Set,
      payload: {
        files: payload,
      },
    });
  };

  const deleteFile = (idx: number) => {
    dispatch({
      type: LampiranAction.Delete,
      payload: {
        idx,
      },
    });
  };

  const setDasar = (payload: SuratReducerState['dasar']) => {
    dispatch({
      type: SuratAction.Dasar,
      payload: {
        dasar: payload,
      },
    });
  };

  const resetSurat = () => {
    dispatch({
      type: SuratAction.Reset,
    });
  };

  return (
    <SuratContext.Provider
      value={{
        state: surat,
        dispatch: {
          setLevelSurat,
          setUptd,
          setTempatPenulisan,
          setTipeTujuan,
          setPenerima,
          setLokasiTujuan,
          setKodeKlasifikasi,
          setUnitPengolah,
          setSifatSurat,
          setUrgensi,
          setPerihal,
          setBody,
          setPenandatangan,
          setPemeriksa,
          setTembusan,
          addLampiran,
          setLampiran,
          deleteLampiran,
          setFile,
          deleteFile,
          setDasar,
          resetSurat,
        },
      }}
    >
      {children}
    </SuratContext.Provider>
  );
};

export default SuratProvider;

export const useSuratContext = () => useContext(SuratContext);
