'use client';
import Image from 'next/image';
import { ReactElement, ReactNode, useState } from 'react';
import { Roboto } from 'next/font/google';
import Link from 'next/link';
import cl from 'classnames';

import SidebarLogo from '@/../public/sidebar-logo.png';
import { usePathname } from 'next/navigation';
import { useSuratBiasaContext } from '@/contexts/surat/Provider';
import { ContentSectionForm } from '@/types/surat';
import { DownloadIcon, Cross1Icon } from '@radix-ui/react-icons';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Button from '../Button';
import NoSSR from '../NoSSR';
import SuratBiasa from '../Surat/Biasa';
import BadanForm from '../Surat/Form/Badan';
import KakiForm from '../Surat/Form/Kaki';
import KepalaForm from '../Surat/Form/Kepala';
import KopForm from '../Surat/Form/Kop';
import FileIcon from '@/../public/images/file-icon.svg';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

interface MainLayoutProps {
  children: ReactNode | ReactElement;
  title?: string;
}

const links = [
  {
    name: 'iFrame based',
    href: '/iframe-based',
  },
  {
    name: 'Component based',
    href: '/component-based',
  },
  {
    name: 'Canvas based',
    href: '/',
  },
];

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  const pathname = usePathname();
  const { state } = useSuratBiasaContext();
  const [activeForm, setActiveForm] = useState<ContentSectionForm | null>(null);

  return (
    <div className={`${roboto.className} flex flex-col h-screen `}>
      <header className="border-b border-solid border-gray-200 px-6 py-3 flex justify-between">
        <Image src={SidebarLogo} className="h-8 w-auto" alt="Sidebar Logo" />
        <nav className="flex items-center gap-6">
          {links.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === link.href
                : pathname.startsWith(link.href);

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
            <header>
              <h1 className="font-medium text-xl">{title}</h1>
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
                <div className="scale-[.43] border border-gray-400">
                  <SuratBiasa data={state} setContentForm={setActiveForm} />
                </div>
              </div>
            )}
            {activeForm === ContentSectionForm.Kop && <KopForm />}
            {activeForm === ContentSectionForm.Kepala && <KepalaForm />}
            {activeForm === ContentSectionForm.Badan && <BadanForm />}
            {activeForm === ContentSectionForm.Kaki && <KakiForm />}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MainLayout;
