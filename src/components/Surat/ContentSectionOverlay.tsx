import React from 'react';
import { Pencil2Icon } from '@radix-ui/react-icons';

import Button from '../Button';
import styles from '@/styles/components/Surat/ContentSectionOverlay.module.css';

interface ContentSectionOverlayProps {
  onClick: Function;
}

const ContentSectionOverlay: React.FC<ContentSectionOverlayProps> = ({
  onClick,
}) => {
  return (
    <div className={styles.container} onClick={() => onClick()}>
      <Button radius="round" className={styles.button}>
        <Pencil2Icon /> Ubah isi naskah
      </Button>
    </div>
  );
};

export default ContentSectionOverlay;
