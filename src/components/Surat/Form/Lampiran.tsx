import { useSuratBiasaContext } from '@/contexts/surat/Provider';
import { useDebouncedCallback } from '@/hooks/useDebounce';
import { LampiranCustom } from '@/types/surat';
import { Editor } from '@tinymce/tinymce-react';
import React, { useRef, useState } from 'react';
import { Editor as TinyMCEEditor } from 'tinymce';

interface LampiranFormProps {
  id: LampiranCustom['id'];
}

const LampiranForm: React.FC<LampiranFormProps> = ({ id }) => {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const { dispatch, state } = useSuratBiasaContext();
  const [initialValue] = useState(
    state.lampiran?.filter((lampiran) => lampiran.id === id)[0].body
  ); // avoid Editor rerender on state change

  const handleEditorChange = () => {
    if (editorRef.current) {
      dispatch.setLampiran({
        id,
        body: editorRef.current.getContent(),
      });
    }
  };

  const debounceHandleEditorChange = useDebouncedCallback(
    handleEditorChange,
    500
  );

  return (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
      onInit={(_, editor) => (editorRef.current = editor)}
      init={{
        style_formats_merge: true,
        advlist_bullet_styles: 'bullet',
        nonbreaking_force_tab: true,
        toolbar_mode: 'scrolling',
        height: '85vh',
        width: '100%',
        menubar: false,
        placeholder: 'Ketik naskah surat disini...',
        plugins:
          'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen  template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount  textpattern noneditable help charmap quickbars emoticons nonbreaking',
        branding: false,
        table_default_styles: { width: '100%' },
        table_default_attributes: {
          border: '1px',
        },
        table_style_by_css: true,
        nonbreaking_wrap: false,
        table_border_styles: [{ title: 'Solid', value: 'solid' }],
        indent_use_margin: true,
        toolbar:
          ' blocks | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | table | lineheight | fontsizeselect | fontselect ',
        content_style: ' body { font-family: Arial; font-size: 12pt }',
        fontsize_formats:
          '8pt 9pt 10pt 11pt 11.5pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
      }}
      initialValue={initialValue}
      onEditorChange={debounceHandleEditorChange}
    />
  );
};

export default LampiranForm;
