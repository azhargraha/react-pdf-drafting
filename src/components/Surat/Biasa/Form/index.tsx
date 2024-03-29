import React, { ChangeEvent, ReactNode } from 'react';

import { useSuratContext } from '@/contexts/surat/Provider';
import { ContentSectionForm, LampiranSectionForm } from '@/types/surat';
import KopForm from '../../Form/Kop';
import PlaceholderForm from '../../Form/Placeholder';
import BadanForm from './Badan';
import KakiForm from './Kaki';
import KepalaForm from './Kepala';
import LampiranForm from './Lampiran';

interface SuratBiasaFormProps {
  activeForm: ContentSectionForm | LampiranSectionForm | null;
  document: ReactNode;
}

const SuratBiasaForm: React.FC<SuratBiasaFormProps> = ({
  activeForm,
  document,
}) => {
  const { dispatch } = useSuratContext();

  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      dispatch.setFile(Array.from(files));
    }
  };

  return (
    <>
      {!activeForm && (
        <PlaceholderForm
          addLampiran={() => dispatch.addLampiran()}
          uploadFile={uploadFile}
          withLampiran
        >
          {document}
        </PlaceholderForm>
      )}
      {activeForm === ContentSectionForm.Kop && <KopForm />}
      {activeForm === ContentSectionForm.Kepala && <KepalaForm />}
      {activeForm === ContentSectionForm.Badan && <BadanForm />}
      {activeForm === ContentSectionForm.Kaki && <KakiForm />}
      {(activeForm as LampiranSectionForm)?.section ===
        ContentSectionForm.Lampiran && (
        <LampiranForm id={(activeForm as LampiranSectionForm).id} />
      )}
    </>
  );
};

export default SuratBiasaForm;
