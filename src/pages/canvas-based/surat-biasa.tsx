import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import NoSSR from '@/components/NoSSR';
import SuratBiasa from '@/components/Surat/Biasa';
import { useSuratContext } from '@/contexts/surat/Provider';
import useMergePDF from '@/hooks/useMergePDF';

const Biasa = () => {
  const { state } = useSuratContext();
  const { mergedUrl } = useMergePDF(<SuratBiasa data={state} isPreview />);

  return (
    <NoSSR>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        {mergedUrl && <Viewer fileUrl={mergedUrl} />}
      </Worker>
    </NoSSR>
  );
};

Biasa.title = 'Canvas Based';

export default Biasa;
