import { PDFViewer } from '@react-pdf/renderer';

import NoSSR from '@/components/NoSSR';
import SuratBiasa from '@/components/Surat/Biasa';
import { useSuratContext } from '@/contexts/surat/Provider';

const IFrameBased = () => {
  const { state } = useSuratContext();

  return (
    <NoSSR>
      <PDFViewer className="w-full">
        <SuratBiasa data={state} isPreview />
      </PDFViewer>
    </NoSSR>
  );
};

IFrameBased.title = 'iFrame Based';

export default IFrameBased;
