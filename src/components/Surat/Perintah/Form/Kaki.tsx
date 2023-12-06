import Select from '@/components/Select';
import Textfield from '@/components/Textfield';
import { useSuratContext } from '@/contexts/surat/Provider';
import { employeeOptions } from '@/dummy';
import { Option } from '@/types/input';

const KakiForm = () => {
  const { dispatch, state } = useSuratContext();
  return (
    <>
      <Textfield
        label="Tempat Penulisan Surat"
        placeholder="Ketik tempat penulisan surat"
        value={state.tempatPenulisan}
        onChange={(e) => dispatch.setTempatPenulisan(e.target.value)}
      />
      <Select
        label="Penandatangan"
        placeholder="Pilih penandatangan"
        name="penandatangan"
        onChange={(selected) =>
          dispatch.setPenandatangan((selected as Option).value || '')
        }
        options={employeeOptions}
      />
      <Select
        label="Pemeriksa"
        placeholder="Pilih/ketik nama pemeriksa naskah"
        name="pemeriksa"
        onChange={(selected) => {
          const newPemeriksa = (selected as Option[]).map(({ value }) => value);

          dispatch.setPemeriksa(newPemeriksa);
        }}
        options={employeeOptions}
        isMulti
      />
    </>
  );
};

export default KakiForm;
