'use client';
import cl from 'classnames';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, ReactElement, ReactNode, useState } from 'react';

import SidebarLogo from '@/../public/sidebar-logo.png';
import { useSuratContext } from '@/contexts/surat/Provider';
import {
  ContentSectionForm,
  LampiranCustom,
  LampiranSectionForm,
} from '@/types/surat';
import { Cross1Icon, DownloadIcon } from '@radix-ui/react-icons';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { usePathname } from 'next/navigation';
import Button from '../Button';
import NoSSR from '../NoSSR';
import SuratBiasa from '../Surat/Biasa';
import BadanForm from '../Surat/Form/Badan';
import KakiForm from '../Surat/Form/Kaki';
import KepalaForm from '../Surat/Form/Kepala';
import KopForm from '../Surat/Form/Kop';
import LampiranForm from '../Surat/Form/Lampiran';
import SuratPerintah from '../Surat/Perintah';
import { useRouter } from 'next/router';
import PlaceholderForm from '../Surat/Form/Placeholder';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

interface MainLayoutProps {
  children: ReactNode | ReactElement;
}

const links = [
  {
    name: 'iFrame',
    href: '/iframe-based',
  },
  {
    name: 'Component',
    href: '/component-based',
  },
  {
    name: 'Canvas',
    href: '/canvas-based',
  },
];

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { state, dispatch } = useSuratContext();
  const [activeForm, setActiveForm] = useState<
    ContentSectionForm | LampiranSectionForm | null
  >(null);

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileContents, setFileContents] = useState<string | null>(null);

  const formatFileSize = (bytes: number) => {
    const sufixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sufixes[i]}`;
  };

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

  const changeSurat = (href: string) => {
    setActiveForm(null);
    dispatch.resetSurat();
    router.push(`/${pathname.split('/')[1]}/${href}`);
  };

  return (
    <div className={`${roboto.className} flex flex-col h-screen `}>
      <header className="border-b border-solid border-gray-200 px-6 py-3 flex justify-between">
        <Image src={SidebarLogo} className="h-8 w-auto" alt="Sidebar Logo" />
        <nav className="flex items-center gap-6">
          {links.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                className={cl('text-sm font-medium', {
                  'text-blue-600': isActive,
                  'text-gray-500 hover:text-blue-500': !isActive,
                })}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </header>
      <div className="flex overflow-hidden h-full">
        <div className="flex-0 w-[72%] bg-gray-100 h-full flex flex-col">
          <nav className="bg-white/50 px-6 py-3 border-b border-solid border-gray-200 flex justify-between items-center">
            <header className="flex items-center gap-6">
              <h1 className="font-semibold text-xl">Konsep Naskah</h1>
              <div className="border-l border-l-gray-400 pl-4">
                <select
                  name="surat-option"
                  id="surat-option"
                  onChange={(e) => changeSurat(e.target.value)}
                  value={pathname.split('/')[2]}
                  className="bg-transparent outline-none"
                >
                  <option value="surat-biasa">Surat biasa</option>
                  <option value="surat-perintah">Surat perintah</option>
                </select>
              </div>
            </header>
            <div className="flex gap-2">
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
          <main className="flex overflow-hidden h-full">{children}</main>
        </div>
        <aside className="flex-1 bg-white px-8 py-6 border-l border-solid border-gray-200 overflow-auto flex flex-col">
          {activeForm && (
            <header className="mb-6 flex justify-between items-center">
              <h1 className="text-2xl">
                {(activeForm as LampiranSectionForm)?.section || activeForm}
              </h1>
              <Cross1Icon
                className="cursor-pointer"
                height={16}
                width={16}
                onClick={() => setActiveForm(null)}
              />
            </header>
          )}
          <div className="flex flex-col gap-6 flex-1">
            {!activeForm && (
              <PlaceholderForm
                addLampiran={() => dispatch.addLampiran()}
                uploadFile={uploadFile}
                withLampiran
              >
                <SuratBiasa data={state} setContentForm={setActiveForm} />
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
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MainLayout;
