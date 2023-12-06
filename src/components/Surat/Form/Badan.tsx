import { useSuratBiasaContext } from '@/contexts/surat/Provider';
import { useDebouncedCallback } from '@/hooks/useDebounce';
import Editor from '@/components/Editor';
import React, { useRef, useState } from 'react';
import { Editor as TinyMCEEditorProps } from 'tinymce';
import Select from '@/components/Select';
import { employeeOptions } from '@/dummy';
import { Option } from '@/types/input';
import { Employee } from '@/types/surat';

interface BadanFormProps {}

const BadanForm: React.FC<BadanFormProps> = () => {
  const { dispatch, state } = useSuratBiasaContext();
  const editorRef = useRef<TinyMCEEditorProps | null>(null);
  const [initialValue] = useState(state.body); // avoid Editor rerender on state change

  const handleEditorChange = () => {
    if (editorRef.current) {
      dispatch.setBody(editorRef.current.getContent());
    }
  };

  const debounceHandleEditorChange = useDebouncedCallback(
    handleEditorChange,
    500
  );

  return (
    <>
      <Select
        label="Kepada"
        placeholder="Pilih penerima perintah"
        name="penerima"
        onChange={(selected) => {
          const newPenerima: Employee[] = (selected as Option[]).map(
            (option) => option.value
          );

          return dispatch.setPenerima(newPenerima);
        }}
        options={employeeOptions}
        isMulti
      />
      <Editor
        label="Untuk"
        onInit={(_, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        onEditorChange={debounceHandleEditorChange}
      />
    </>
  );
};

export default BadanForm;
