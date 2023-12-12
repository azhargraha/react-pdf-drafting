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
