import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { BlobProvider } from '@react-pdf/renderer';

import NoSSR from '@/components/NoSSR';
import SuratPerintah from '@/components/Surat/Perintah';
import { useSuratBiasaContext } from '@/contexts/surat/Provider';

const Home = () => {
  const { state } = useSuratBiasaContext();

  return (
    <NoSSR>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <BlobProvider document={<SuratPerintah data={state} isPreview />}>
          {({ url, loading }) => !loading && url && <Viewer fileUrl={url} />}
        </BlobProvider>
      </Worker>
    </NoSSR>
  );
};

Home.title = 'Canvas Based';

export default Home;
