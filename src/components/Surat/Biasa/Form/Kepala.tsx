import Textfield from '@/components/Textfield';
import {
  tipeTujuanOptions,
  employeeOptions,
  sifatSuratOptions,
  kodeKlasifikasiOptions,
} from '@/dummy';
import RadioGroup from '@/components/Radio/Group';
import Select from '@/components/Select';
import { Option } from '@/types/input';
import { useSuratContext } from '@/contexts/surat/Provider';
import { Employee } from '@/types/surat';

const KepalaForm = () => {
  const { state, dispatch } = useSuratContext();

  return (
    <>
      <Textfield
        label="Tempat Penulisan Surat"
        placeholder="Ketik tempat penulisan surat"
        value={state.tempatPenulisan}
        onChange={(e) => dispatch.setTempatPenulisan(e.target.value)}
      />
      <RadioGroup
        variant="row"
        name="tipeTujuan"
        id="tipe-tujuan"
        options={tipeTujuanOptions}
        label="Penempatan Daftar Tujuan Surat"
        onChange={(e) => dispatch.setTipeTujuan(e.target.value)}
        defaultOption={tipeTujuanOptions[0]}
      />
      <Select
        label="Kepada Yth."
        placeholder="Pilih/ketik tujuan surat"
        name="tujuan"
        id="tujuan"
        onChange={(selected) => {
          const newPenerima: Employee[] = (selected as Option[]).map(
            (option) => option.value
          );

          return dispatch.setPenerima(newPenerima);
        }}
        options={employeeOptions}
        isMulti
      />
      <Textfield
        label="Di"
        name="lokasiTujuan"
        id="lokasiTujuan"
        placeholder="Ketik lokasi penerima"
        value={state.lokasiTujuan}
        onChange={(e) => dispatch.setLokasiTujuan(e.target.value)}
      />
      <Select
        label="Kode Klasifikasi"
        placeholder="Pilih kode klasifikasi"
        name="kodeKlasifikasi"
        onChange={(selected) =>
          dispatch.setKodeKlasifikasi((selected as Option).value || '')
        }
        options={kodeKlasifikasiOptions}
      />
      <Textfield
        label="Unit Pengolah"
        name="unitPengolah"
        placeholder="Ketik unit pengolah"
        value={state.unitPengolah}
        onChange={(e) => dispatch.setUnitPengolah(e.target.value)}
      />
      <Select
        label="Sifat Surat"
        placeholder="Pilih sifat surat"
        name="sifatSurat"
        onChange={(selected) =>
          dispatch.setSifatSurat((selected as Option).value || '')
        }
        options={sifatSuratOptions}
      />
      <Select
        label="Urgensi"
        placeholder="Pilih urgensi"
        name="urgensi"
        onChange={(selected) =>
          dispatch.setUrgensi((selected as Option).value || '')
        }
        options={employeeOptions}
      />
      <Textfield
        label="Perihal"
        placeholder="Pilih perihal"
        name="perihal"
        value={state.perihal}
        onChange={(e) => dispatch.setPerihal(e.target.value)}
      />
    </>
  );
};

export default KepalaForm;
