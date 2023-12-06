import React, { ChangeEvent, useState, ReactNode } from 'react';
import PlaceholderForm from '../../Form/Placeholder';
import { useSuratContext } from '@/contexts/surat/Provider';
import { ContentSectionForm, LampiranSectionForm } from '@/types/surat';
import KopForm from '../../Form/Kop';
import BadanForm from './Badan';
import KakiForm from './Kaki';
import KepalaForm from './Kepala';

interface SuratPerintahFormProps {
  activeForm: ContentSectionForm | LampiranSectionForm | null;
  document: ReactNode;
}

const SuratPerintahForm: React.FC<SuratPerintahFormProps> = ({
  activeForm,
  document,
}) => {
  const { dispatch } = useSuratContext();

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileContents, setFileContents] = useState<string | null>(null);

  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      setSelectedFiles(Array.from(files));

      if (files.length > 0) {
        readContents(files[0]);
      }
    }
  };

  const readContents = (file: File) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target?.result as string;
      setFileContents(contents);
      console.log(contents);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      {!activeForm && <PlaceholderForm>{document}</PlaceholderForm>}
      {activeForm === ContentSectionForm.Kop && <KopForm />}
      {activeForm === ContentSectionForm.Kepala && <KepalaForm />}
      {activeForm === ContentSectionForm.Badan && <BadanForm />}
      {activeForm === ContentSectionForm.Kaki && <KakiForm />}
    </>
  );
};

export default SuratPerintahForm;
