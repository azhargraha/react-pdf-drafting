import Select from '@/components/Select';
import { useSuratBiasaContext } from '@/contexts/surat/Provider';
import { employeeOptions } from '@/dummy';
import { Option } from '@/types/input';
import { Employee } from '@/types/surat';

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
      <Select
        label="Tembusan"
        subLabel="Tujuan tembusan maksimal 10 orang"
        placeholder="Pilih/ketik tembusan naskah"
        name="tembusan"
        onChange={(selected) => {
          const newTembusan: Employee[] = (selected as Option[]).map(
            (option) => option.value
          );

          dispatch.setTembusan(newTembusan);
        }}
        options={employeeOptions}
        isMulti
      />
    </>
  );
};

export default KakiForm;
