import { useRef, useState } from 'react';
import { Editor as TinyMCEEditorProps } from 'tinymce';

import { useDebouncedCallback } from './useDebounce';

const useEditorDebounce = (
  initialState: any,
  cb: (content: string) => void
) => {
  const editorRef = useRef<TinyMCEEditorProps | null>(null);
  const [initialValue] = useState(initialState); // avoid Editor rerender on state change

  const handleEditorChange = () => {
    if (editorRef.current) {
      cb(editorRef.current.getContent());
    }
  };

  const debounceHandleEditorChange = useDebouncedCallback(
    handleEditorChange,
    500
  );

  return { editorRef, initialValue, debounceHandleEditorChange };
};

export default useEditorDebounce;
