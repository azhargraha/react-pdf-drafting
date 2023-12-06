import { PDFViewer } from '@react-pdf/renderer';

import NoSSR from '@/components/NoSSR';
import SuratPerintah from '@/components/Surat/Perintah';
import { useSuratContext } from '@/contexts/surat/Provider';

const IFrameBased = () => {
  const { state } = useSuratContext();

  return (
    <NoSSR>
      <PDFViewer className="w-full">
        <SuratPerintah data={state} isPreview />
      </PDFViewer>
    </NoSSR>
  );
};

IFrameBased.title = 'iFrame Based';

export default IFrameBased;
