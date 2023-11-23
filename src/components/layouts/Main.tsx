import Image from 'next/image';
import { ReactElement, ReactNode } from 'react';
import { Roboto } from 'next/font/google';

import SidebarLogo from '@/../public/sidebar-logo.png';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

interface MainLayoutProps {
  children: ReactNode | ReactElement;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={`${roboto.className} flex flex-col h-screen `}>
      <header className="border-b border-solid border-gray-200 px-6 py-3">
        <Image src={SidebarLogo} className="h-8 w-auto" alt="Sidebar Logo" />
      </header>
      {children}
    </div>
  );
};

export default MainLayout;
