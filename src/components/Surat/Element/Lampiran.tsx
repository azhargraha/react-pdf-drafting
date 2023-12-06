import { Page, View, Text } from '@react-pdf/renderer';
import React, { Dispatch, SetStateAction } from 'react';

import { CSSStyles, renderers, styles } from '../config';
import {
  ContentSectionForm,
  LampiranCustom,
  LampiranSectionForm,
} from '@/types/surat';
import { format } from 'date-fns';
import { id as LocaleID } from 'date-fns/locale';
import SuratBiasa from '../Biasa';
import Kaki from './Kaki';
import ContentSectionOverlay from '../ContentSectionOverlay';
import Html from 'react-pdf-html';
import { useSuratContext } from '@/contexts/surat/Provider';

interface LampiranProps {
  isPreview?: boolean;
  data: Partial<SuratBiasa>;
  setContentForm?: Dispatch<
    SetStateAction<ContentSectionForm | LampiranSectionForm | null>
  >;
  body: LampiranCustom['body'];
  id: LampiranCustom['id'];
}

const Lampiran: React.FC<LampiranProps> = ({
  data,
  body,
  id,
  isPreview,
  setContentForm,
}) => {
  const { dispatch } = useSuratContext();
  const renderContentSectionOverlay = () =>
    !isPreview && (
      <ContentSectionOverlay
        onClick={() =>
          setContentForm &&
          setContentForm({
            section: ContentSectionForm.Lampiran,
            id,
          })
        }
      />
    );

  return (
    <Page
      style={{ ...styles.page, ...styles.column, gap: 18 }}
      size="A4"
      dpi={96}
      wrap
    >
      <button
        className="uppercase bg-red-500 text-white"
        onClick={() => dispatch.deleteLampiran(id)}
      >
        Delete
      </button>
      <View
        style={{
          ...styles.row,
          justifyContent: 'flex-end',
        }}
      >
        <View style={{ ...styles.row, gap: 6, marginRight: 6 }}>
          <Text style={{ ...styles.text }}>LAMPIRAN</Text>
          <Text style={styles.text}>:</Text>
        </View>
        <View style={{ ...styles.column }}>
          <Text
            style={{
              ...styles.text,
              ...styles.textUppercase,
              ...(!data.penandatangan ? styles.empty : {}),
            }}
          >
            {data.penandatangan?.jabatan || 'JABATAN PENANDATANGAN'}
          </Text>
          <View
            style={{
              ...styles.row,
              gap: 6,
            }}
          >
            <Text style={{ ...styles.text, width: 65 }}>Nomor</Text>
            <Text style={styles.text}>:</Text>
            <Text style={{ ...styles.text, width: 165 }}>
              {'...... / '}
              <Text style={!data.kodeKlasifikasi ? styles.empty : {}}>
                {data.kodeKlasifikasi || 'Kode Klasifikasi'}
              </Text>
              {' / '}
              <Text style={!data.unitPengolah ? styles.empty : {}}>
                {data.unitPengolah || 'Pengolah'}
              </Text>
            </Text>
          </View>
          <View style={{ ...styles.row, gap: 6 }}>
            <Text style={{ ...styles.text, width: 65 }}>Tanggal</Text>
            <Text style={styles.text}>:</Text>
            <Text style={{ ...styles.text }}>
              {format(data.tanggalPenulisan!, 'dd MMMM yyyy', {
                locale: LocaleID,
              })}
            </Text>
          </View>
          <View style={{ ...styles.row, gap: 6 }}>
            <Text style={{ ...styles.text, width: 65 }}>Perihal</Text>
            <Text style={styles.text}>:</Text>
            <Text style={{ ...styles.text, ...styles.empty }}>
              Perihal Belum Diisi
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.column,
          position: 'relative',
          gap: 18,
          marginLeft: 87,
          minHeight: 96,
        }}
      >
        {renderContentSectionOverlay()}
        {body ? (
          isPreview ? (
            <Html renderers={renderers} stylesheet={CSSStyles}>
              {body}
            </Html>
          ) : (
            <div>{body}</div>
          )
        ) : (
          <Text style={{ ...styles.text, ...styles.empty }}>
            Sorot dan klik pada bagian ini untuk menampilkan teks editor isian
            lampiran.
          </Text>
        )}
      </View>
      <Kaki data={data} isPreview setContentForm={setContentForm} />
    </Page>
  );
};

export default Lampiran;
