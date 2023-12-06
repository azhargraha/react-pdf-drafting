import React, {
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from 'react';

import { initialSuratBiasa } from '@/dummy';
import { LampiranCustom, SuratBiasa } from '@/types/surat';
import {
  LampiranAction,
  SuratBiasaSetAction,
  suratBiasaReducer,
} from './reducer';

export type SuratContextType = {
  state: Partial<SuratBiasa>;
  dispatch: {
    setLevelSurat: (payload: SuratBiasa['levelSurat']) => void;
    setUptd: (payload: SuratBiasa['uptd']) => void;
    setTempatPenulisan: (payload: SuratBiasa['tempatPenulisan']) => void;
    setTipeTujuan: (payload: SuratBiasa['tipeTujuan']) => void;
    setPenerima: (payload: SuratBiasa['penerima']) => void;
    setLokasiTujuan: (payload: SuratBiasa['lokasiTujuan']) => void;
    setKodeKlasifikasi: (payload: SuratBiasa['kodeKlasifikasi']) => void;
    setUnitPengolah: (payload: SuratBiasa['unitPengolah']) => void;
    setSifatSurat: (payload: SuratBiasa['sifatSurat']) => void;
    setUrgensi: (payload: SuratBiasa['urgensi']) => void;
    setPerihal: (payload: SuratBiasa['perihal']) => void;
    setBody: (payload: SuratBiasa['body']) => void;
    setPenandatangan: (payload: SuratBiasa['penandatangan']) => void;
    setPemeriksa: (payload: SuratBiasa['pemeriksa']) => void;
    setTembusan: (payload: SuratBiasa['tembusan']) => void;
    addLampiran: () => void;
    setLampiran: (payload: LampiranCustom) => void;
    deleteLampiran: (id: LampiranCustom['id']) => void;
    setFile: (payload: SuratBiasa['files']) => void;
    deleteFile: (idx: number) => void;
  };
};

export const SuratBiasaContext: React.Context<SuratContextType> = createContext(
  {} as SuratContextType
);

interface SuratProviderProps {
  children: ReactNode | ReactElement;
}

const SuratBiasaProvider: React.FC<SuratProviderProps> = ({ children }) => {
  const [suratBiasa, dispatch] = useReducer(
    suratBiasaReducer,
    initialSuratBiasa
  );

  const setLevelSurat = (payload: SuratBiasa['levelSurat']) => {
    dispatch({
      type: SuratBiasaSetAction.LevelSurat,
      payload: {
        levelSurat: payload,
      },
    });
  };

  const setUptd = (payload: SuratBiasa['uptd']) => {
    dispatch({
      type: SuratBiasaSetAction.Uptd,
      payload: {
        uptd: payload,
      },
    });
  };

  const setTempatPenulisan = (payload: SuratBiasa['tempatPenulisan']) => {
    dispatch({
      type: SuratBiasaSetAction.TempatPenulisan,
      payload: {
        tempatPenulisan: payload,
      },
    });
  };

  const setTipeTujuan = (payload: SuratBiasa['tipeTujuan']) => {
    dispatch({
      type: SuratBiasaSetAction.TipeTujuan,
      payload: {
        tipeTujuan: payload,
      },
    });
  };

  const setPenerima = (payload: SuratBiasa['penerima']) => {
    dispatch({
      type: SuratBiasaSetAction.Penerima,
      payload: {
        penerima: payload,
      },
    });
  };

  const setLokasiTujuan = (payload: SuratBiasa['lokasiTujuan']) => {
    dispatch({
      type: SuratBiasaSetAction.LokasiTujuan,
      payload: {
        lokasiTujuan: payload,
      },
    });
  };

  const setKodeKlasifikasi = (payload: SuratBiasa['kodeKlasifikasi']) => {
    dispatch({
      type: SuratBiasaSetAction.KodeKlasifikasi,
      payload: {
        kodeKlasifikasi: payload,
      },
    });
  };

  const setUnitPengolah = (payload: SuratBiasa['unitPengolah']) => {
    dispatch({
      type: SuratBiasaSetAction.UnitPengolah,
      payload: {
        unitPengolah: payload,
      },
    });
  };

  const setSifatSurat = (payload: SuratBiasa['sifatSurat']) => {
    dispatch({
      type: SuratBiasaSetAction.SifatSurat,
      payload: {
        sifatSurat: payload,
      },
    });
  };

  const setUrgensi = (payload: SuratBiasa['urgensi']) => {
    dispatch({
      type: SuratBiasaSetAction.Urgensi,
      payload: {
        urgensi: payload,
      },
    });
  };

  const setPerihal = (payload: SuratBiasa['perihal']) => {
    dispatch({
      type: SuratBiasaSetAction.Perihal,
      payload: {
        perihal: payload,
      },
    });
  };

  const setBody = (payload: SuratBiasa['body']) => {
    dispatch({
      type: SuratBiasaSetAction.Body,
      payload: {
        body: payload,
      },
    });
  };

  const setPenandatangan = (payload: SuratBiasa['penandatangan']) => {
    dispatch({
      type: SuratBiasaSetAction.Penandatangan,
      payload: {
        penandatangan: payload,
      },
    });
  };

  const setPemeriksa = (payload: SuratBiasa['pemeriksa']) => {
    dispatch({
      type: SuratBiasaSetAction.Pemeriksa,
      payload: {
        pemeriksa: payload,
      },
    });
  };

  const setTembusan = (payload: SuratBiasa['tembusan']) => {
    dispatch({
      type: SuratBiasaSetAction.Tembusan,
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

  const setFile = (payload: SuratBiasa['files']) => {
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

  return (
    <SuratBiasaContext.Provider
      value={{
        state: suratBiasa,
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
        },
      }}
    >
      {children}
    </SuratBiasaContext.Provider>
  );
};

export default SuratBiasaProvider;

export const useSuratBiasaContext = () => useContext(SuratBiasaContext);
