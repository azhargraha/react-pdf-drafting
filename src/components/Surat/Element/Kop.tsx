/* eslint-disable jsx-a11y/alt-text */
import { Image, View } from '@react-pdf/renderer';
import NextImage from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

import KopDinas from '@/../public/images/kop-surat/kop-dinas.png';
import KopSekda from '@/../public/images/kop-surat/kop-sekda.png';
import KopUptd from '@/../public/images/kop-surat/kop-uptd.png';
import { ContentSectionForm, LevelKop, Surat, SuratProps } from '@/types/surat';
import SuratBiasa from '../Biasa';
import ContentSectionOverlay from '../ContentSectionOverlay';

interface KopProps extends SuratProps<Surat> {}

const Kop: React.FC<KopProps> = ({ data, isPreview, setContentForm }) => {
  const kopImage = () => {
    if (data.levelSurat === LevelKop.Dinas) return KopDinas;
    if (data.levelSurat === LevelKop.Sekda) return KopSekda;
    return KopUptd;
  };

  const renderContentSectionOverlay = (form: ContentSectionForm) =>
    !isPreview && (
      <ContentSectionOverlay
        onClick={() => setContentForm && setContentForm(form)}
      />
    );

  return (
    <View style={{ position: 'relative' }}>
      {renderContentSectionOverlay(ContentSectionForm.Kop)}
      {isPreview ? (
        <Image src={kopImage().src} source={kopImage().src} />
      ) : (
        <NextImage
          src={kopImage()}
          width={kopImage().width}
          height={kopImage().height}
          alt="Kop Surat Biasa"
        />
      )}
    </View>
  );
};

export default Kop;
