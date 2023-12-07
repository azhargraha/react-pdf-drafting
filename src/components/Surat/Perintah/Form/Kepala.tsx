import Editor from '@/components/Editor';
import Select from '@/components/Select';
import Textfield from '@/components/Textfield';
import { useSuratContext } from '@/contexts/surat/Provider';
import { employeeOptions, kodeKlasifikasiOptions } from '@/dummy';
import useEditorDebounce from '@/hooks/useEditorDebounce';
import useTextfieldDebounce from '@/hooks/useTextfieldDebounce';
import { Option } from '@/types/input';

const KepalaForm = () => {
  const { state, dispatch } = useSuratContext();
  const { editorRef, initialValue, debounceHandleEditorChange } =
    useEditorDebounce(state.dasar, (content) => dispatch.setDasar(content));

  const debounceTextfieldChange = useTextfieldDebounce();

  return (
    <>
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
        defaultValue={state.unitPengolah}
        onChange={(e) =>
          debounceTextfieldChange(() =>
            dispatch.setUnitPengolah(e.target.value)
          )
        }
      />
      <Textfield
        label="Perihal"
        placeholder="Pilih perihal"
        name="perihal"
        defaultValue={state.perihal}
        onChange={(e) =>
          debounceTextfieldChange(() => dispatch.setPerihal(e.target.value))
        }
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
      <Editor
        label="Dasar"
        onInit={(_, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        onEditorChange={debounceHandleEditorChange}
      />
    </>
  );
};

export default KepalaForm;
