import { Cross1Icon, DownloadIcon, ReaderIcon } from '@radix-ui/react-icons';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import cl from 'classnames';
import { useRef, useState } from 'react';
import { Editor as TinyMCEEditor } from 'tinymce';
import Image from 'next/image';

import Button from '@/components/Button';
import NoSSR from '@/components/NoSSR';
import SuratBiasa from '@/components/Surat/Biasa';
import BadanForm from '@/components/Surat/Form/Badan';
import KakiForm from '@/components/Surat/Form/Kaki';
import KepalaForm from '@/components/Surat/Form/Kepala';
import KopForm from '@/components/Surat/Form/Kop';
import { useSuratBiasaContext } from '@/contexts/surat/Provider';
import { ContentSectionForm } from '@/types/surat';
import FileIcon from '@/../public/images/file-icon.svg';

const Home = () => {
  const { state } = useSuratBiasaContext();
  const [preview, setPreview] = useState(false);
  const [activeForm, setActiveForm] = useState<ContentSectionForm | null>(null);
  const editorRef = useRef<TinyMCEEditor | null>(null);

  return (
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
              <PDFViewer
                style={{
                  height: '100%',
                  width: '100%',
                }}
                showToolbar={true}
              >
                <SuratBiasa data={state} isPreview />
              </PDFViewer>
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
            <BadanForm editorRef={editorRef} />
          )}
          {activeForm === ContentSectionForm.Kaki && <KakiForm />}
        </div>
      </aside>
    </div>
  );
};

export default Home;
