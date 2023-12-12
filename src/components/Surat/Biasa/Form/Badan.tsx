import React from 'react';

import Editor from '@/components/Editor';
import { useSuratContext } from '@/contexts/surat/Provider';
import useEditorDebounce from '@/hooks/useEditorDebounce';

interface BadanFormProps {}

const BadanForm: React.FC<BadanFormProps> = () => {
  const { dispatch, state } = useSuratContext();
  const { editorRef, initialValue, debounceHandleEditorChange } =
    useEditorDebounce(state.body, (content) => dispatch.setBody(content));

  return (
    <Editor
      onInit={(_, editor) => (editorRef.current = editor)}
      initialValue={initialValue}
      onEditorChange={debounceHandleEditorChange}
    />
  );
};

export default BadanForm;
