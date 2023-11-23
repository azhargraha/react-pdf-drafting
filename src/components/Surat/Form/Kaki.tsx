import Select from '@/components/Select';
import { useSuratBiasaContext } from '@/contexts/surat/Provider';
import { penandatanganOptions, personOptions } from '@/dummy';
import { Option } from '@/types/input';

const KakiForm = () => {
  const { dispatch } = useSuratBiasaContext();
  return (
    <>
      <Select
        label="Penandatangan"
        placeholder="Pilih penandatangan"
        name="penandatangan"
        onChange={(selected) =>
          dispatch.setPenandatangan((selected as Option).value || '')
        }
        options={penandatanganOptions}
      />
      <Select
        label="Pemeriksa"
        placeholder="Pilih/ketik nama pemeriksa naskah"
        name="pemeriksa"
        onChange={(selected) =>
          dispatch.setPemeriksa((selected as Option).value || '')
        }
        options={personOptions}
      />
      <Select
        label="Tembusan"
        subLabel="Tujuan tembusan maksimal 10 orang"
        placeholder="Pilih/ketik tembusan naskah"
        name="tembusan"
        onChange={(selected) =>
          dispatch.setTembusan((selected as Option).value || '')
        }
        options={personOptions}
      />
    </>
  );
};

export default KakiForm;
