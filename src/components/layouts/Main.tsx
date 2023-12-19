'use client';
import cl from 'classnames';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, ReactNode, useState } from 'react';
import { Cross1Icon, DownloadIcon } from '@radix-ui/react-icons';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

import SidebarLogo from '@/../public/sidebar-logo.png';
import { useSuratContext } from '@/contexts/surat/Provider';
import { ContentSectionForm, LampiranSectionForm } from '@/types/surat';
import Button from '../Button';
import NoSSR from '../NoSSR';
import SuratBiasa from '../Surat/Biasa';
import SuratBiasaForm from '../Surat/Biasa/Form';
import SuratPerintah from '../Surat/Perintah';
import SuratPerintahForm from '../Surat/Perintah/Form';
import useMergePDF from '@/hooks/useMergePDF';
import Select from '../Select';
import { Option } from '@/types/input';

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

const documentTypeOption = [
  {
    value: 'surat-biasa',
    label: 'Surat biasa',
  },
  {
    value: 'surat-perintah',
    label: 'Surat perintah',
  },
];

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [_, renderingMode, documentType] = pathname.split('/');
  const router = useRouter();
  const { state, dispatch } = useSuratContext();
  const [activeForm, setActiveForm] = useState<
    ContentSectionForm | LampiranSectionForm | null
  >(null);

  const document = (isPreview: boolean = false) => {
    const props = {
      data: state,
      setContentForm: setActiveForm,
      isPreview,
    };

    if (documentType === 'surat-perintah') {
      return <SuratPerintah {...props} />;
    }

    return <SuratBiasa {...props} />;
  };

  const { isLoading, downloadDocument } = useMergePDF(document(true));

  const form = () => {
    const props = {
      activeForm,
      document: document(),
    };

    if (documentType === 'surat-perintah') {
      return <SuratPerintahForm {...props} />;
    }

    return <SuratBiasaForm {...props} />;
  };

  const changeSurat = (href: string) => {
    setActiveForm(null);
    dispatch.resetSurat();
    router.push(`/${renderingMode}/${href}`);
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
                href={link.href + `/${documentType}`}
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
                <Select
                  styles={{
                    control: () => ({
                      display: 'flex',
                      alignItems: 'center',
                    }),
                    valueContainer: (baseStyles) => ({
                      ...baseStyles,
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                      paddingRight: 8,
                    }),
                    indicatorSeparator: () => ({
                      display: 'none',
                    }),
                    dropdownIndicator: (baseStyles) => ({
                      ...baseStyles,
                      padding: 0,
                    }),
                    menu: (baseStyles) => ({
                      ...baseStyles,
                      width: 130,
                    }),
                  }}
                  options={documentTypeOption}
                  defaultValue={documentTypeOption[0]}
                  isSearchable={false}
                  onChange={(selected) =>
                    changeSurat((selected as Option).value)
                  }
                />
              </div>
            </header>
            <div className="flex gap-2">
              <Button onClick={() => downloadDocument(documentType)}>
                <DownloadIcon height={18} width={18} />
                <span>{isLoading ? 'Loading PDF' : 'Download'}</span>
              </Button>
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
          <div className="flex flex-col gap-6 flex-1">{form()}</div>
        </aside>
      </div>
    </div>
  );
};

export default MainLayout;
