import React from 'react';
import Label, { LabelProps } from './Label';
import {
  Editor as TinyMCEEditor,
  IAllProps as TinyMCEEditorProps,
} from '@tinymce/tinymce-react';

interface EditorProps extends TinyMCEEditorProps, Partial<LabelProps> {}

const Editor: React.FC<EditorProps> = ({ label, subLabel, ...props }) => {
  return (
    <div className="flex flex-col gap-2 z-0">
      {label && <Label label={label} subLabel={subLabel} />}
      <TinyMCEEditor
        {...props}
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
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
            ' blocks | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | table | lineheight | fontsize | fontfamily ',
          content_style: ' body { font-family: Arial; font-size: 12pt }',
          fontsize_formats:
            '8pt 9pt 10pt 11pt 11.5pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
        }}
        plugins="print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen  template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount  textpattern noneditable help charmap quickbars emoticons nonbreaking"
      />
    </div>
  );
};

export default Editor;
