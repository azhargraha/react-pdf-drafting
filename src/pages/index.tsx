import { Cross1Icon, DownloadIcon, ReaderIcon } from '@radix-ui/react-icons';
import {
  BlobProvider,
  PDFDownloadLink,
  PDFViewer,
  pdf,
  usePDF,
} from '@react-pdf/renderer';
import { Page, Document, pdfjs } from 'react-pdf';
import cl from 'classnames';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import FileIcon from '@/../public/images/file-icon.svg';
import Button from '@/components/Button';
import NoSSR from '@/components/NoSSR';
import SuratBiasa from '@/components/Surat/Biasa';
import BadanForm from '@/components/Surat/Form/Badan';
import KakiForm from '@/components/Surat/Form/Kaki';
import KepalaForm from '@/components/Surat/Form/Kepala';
import KopForm from '@/components/Surat/Form/Kop';
import { useSuratBiasaContext } from '@/contexts/surat/Provider';
import { ContentSectionForm } from '@/types/surat';
import { useAsync } from 'react-use';

const Home = () => {
  const { state } = useSuratBiasaContext();
  const [preview, setPreview] = useState(true);
  const [activeForm, setActiveForm] = useState<ContentSectionForm | null>(null);

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="flex overflow-hidden h-full">
        <div className="flex-0 w-[72%] bg-gray-100 h-full flex flex-col">
          <nav className="bg-white/50 px-6 py-3 border-b border-solid border-gray-200 flex justify-between items-center">
            <header>
              <h1 className="font-medium text-xl">Konsep Naskah</h1>
            </header>
            <div className="flex gap-2">
              <Button
                variant="outline"
                color="secondary"
                onClick={() => setPreview(!preview)}
              >
                <ReaderIcon height={18} width={18} /> Preview
              </Button>
              <NoSSR>
                <PDFDownloadLink
                  document={<SuratBiasa data={state} isPreview />}
                  fileName="Surat Biasa"
                >
                  {({ blob, url, loading, error }) => {
                    let label = '';

                    if (error) {
                      label = error.message;
                    } else {
                      label = loading ? 'Loading PDF' : 'Download';
                    }

                    return (
                      <Button>
                        <DownloadIcon height={18} width={18} />
                        <span>{label}</span>
                      </Button>
                    );
                  }}
                </PDFDownloadLink>
              </NoSSR>
            </div>
          </nav>
          <main className="flex overflow-hidden h-full">
            <NoSSR>
              <div
                className={cl(
                  'overflow-hidden transition-[flex] ease-out duration-500',
                  {
                    'flex-1': preview,
                    'flex-[0]': !preview,
                  }
                )}
              >
                <BlobProvider document={<SuratBiasa data={state} isPreview />}>
                  {({ url, loading }) =>
                    !loading && url && <Viewer fileUrl={url} />
                  }
                </BlobProvider>
              </div>
            </NoSSR>
            <div className="flex-1 overflow-auto">
              <div
                className={cl(
                  'my-6 flex items-center justify-center transition-transform ease-out duration-500',
                  {
                    'scale-[70%]': preview,
                  }
                )}
              >
                <SuratBiasa data={state} setContentForm={setActiveForm} />
              </div>
            </div>
          </main>
        </div>
        <aside className="flex-1 bg-white px-8 py-6 border-l border-solid border-gray-200 overflow-auto">
          {activeForm && (
            <header className="mb-6 flex justify-between items-center">
              <h1 className="text-2xl">{activeForm}</h1>
              <Cross1Icon
                className="cursor-pointer"
                height={16}
                width={16}
                onClick={() => setActiveForm(null)}
              />
            </header>
          )}
          <div className="flex flex-col gap-6 h-full">
            {!activeForm && (
              <div className="flex flex-col justify-center items-center gap-6 h-full">
                <Image src={FileIcon} alt="file description" />
                <p className="text-center text-[#9E9E9E]">
                  Klik bagian surat di samping untuk mengisi dan mengubah isi
                  naskah
                </p>
              </div>
            )}
            {activeForm === ContentSectionForm.Kop && <KopForm />}
            {activeForm === ContentSectionForm.Kepala && <KepalaForm />}
            {activeForm === ContentSectionForm.Badan && (
              <BadanForm key="test" />
            )}
            {activeForm === ContentSectionForm.Kaki && <KakiForm />}
          </div>
        </aside>
      </div>
    </Worker>
  );
};

export default Home;
