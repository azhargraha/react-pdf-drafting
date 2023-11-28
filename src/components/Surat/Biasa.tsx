'use client';

/* eslint-disable jsx-a11y/alt-text */
import { Document, Image, Page, Text, View } from '@react-pdf/renderer';
import format from 'date-fns/format';
import { id } from 'date-fns/locale';
import NextImage from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

import KopDinas from '@/../public/images/kop-surat/kop-dinas.png';
import KopSekda from '@/../public/images/kop-surat/kop-sekda.png';
import KopUptd from '@/../public/images/kop-surat/kop-uptd.png';
import { ContentSectionForm, LevelKop, SuratBiasa } from '@/types/surat';
import { Html } from 'react-pdf-html';
import ContentSectionOverlay from './ContentSectionOverlay';
import { CSSStyles, styles } from './config';

interface SuratBiasaProps {
  isPreview?: boolean;
  data: Partial<SuratBiasa>;
  setContentForm?: Dispatch<SetStateAction<ContentSectionForm | null>>;
}

const SuratBiasa: React.FC<SuratBiasaProps> = ({
  isPreview = false,
  data,
  setContentForm,
}) => {
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
    <Document>
      <Page
        style={{ ...styles.page, ...styles.column, gap: 18 }}
        size="A4"
        dpi={96}
        wrap
      >
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
        <View style={{ ...styles.row, justifyContent: 'flex-end' }}>
          <Text style={{ ...styles.text, width: 234 }}>
            {data.tempatPenulisan},{' '}
            {format(data.tanggalPenulisan!, 'dd MMMM yyyy', { locale: id })}
          </Text>
        </View>
        <View
          style={{
            ...styles.row,
            position: 'relative',
          }}
        >
          {renderContentSectionOverlay(ContentSectionForm.Kepala)}
          <View style={styles.column}>
            <View style={{ ...styles.row, gap: 6 }}>
              <Text style={{ ...styles.text, width: 70 }}>Nomor</Text>
              <Text style={styles.text}>:</Text>
              <Text style={{ ...styles.text, width: 271 }}>
                {'...... / '}
                <Text style={!data.kodeKlasifikasi ? styles.empty : {}}>
                  {data.kodeKlasifikasi || 'Kode Klasifikasi'}
                </Text>
                {' / '}
                <Text style={!data.unitPengolah ? styles.empty : {}}>
                  {data.unitPengolah || 'Unit Pengolah'}
                </Text>
              </Text>
            </View>
            <View style={{ ...styles.row, gap: 6 }}>
              <Text style={{ ...styles.text, width: 70 }}>Sifat</Text>
              <Text style={styles.text}>:</Text>
              <Text
                style={{
                  width: 271,
                  ...styles.text,
                  ...(!data.sifatSurat ? styles.empty : {}),
                }}
              >
                {data.sifatSurat || 'Sifat belum diisi'}
              </Text>
            </View>
            <View style={{ ...styles.row, gap: 6 }}>
              <Text style={{ ...styles.text, width: 70 }}>Lampiran</Text>
              <Text style={styles.text}>:</Text>
              <Text style={{ ...styles.text, width: 271 }}>
                {data.tipeTujuan !== 'Lampiran' ? '-' : '1 Berkas'}
              </Text>
            </View>
            <View style={{ ...styles.row, gap: 6 }}>
              <Text style={{ ...styles.text, width: 70 }}>Hal</Text>
              <Text style={styles.text}>:</Text>
              <Text
                style={{
                  width: 271,
                  ...styles.text,
                  ...(!data.perihal ? styles.empty : {}),
                }}
              >
                {data.perihal || 'Perihal belum diisi'}
              </Text>
            </View>
          </View>
          <View style={{ ...styles.column, marginLeft: 'auto' }}>
            <View style={{ ...styles.row, gap: 6 }}>
              <Text style={{ ...styles.text, width: 234 }}>Kepada</Text>
            </View>
            <View style={{ ...styles.row, gap: 6 }}>
              <Text style={styles.text}>Yth.</Text>
              <View style={styles.column}>
                <Text
                  style={{
                    ...styles.text,
                    width: 199,
                    ...(!data.tujuan ? styles.empty : {}),
                  }}
                >
                  {data.tujuan || 'Tujuan belum diisi'}
                </Text>
                <Text style={{ ...styles.text, width: 199 }}>di</Text>
                <View style={styles.column}>
                  <Text
                    style={{
                      width: 185,
                      marginLeft: 'auto',
                      ...styles.text,
                      ...(!data.lokasiTujuan ? styles.empty : {}),
                    }}
                  >
                    {data.lokasiTujuan || 'Alamat tujuan belum diisi'}
                  </Text>
                </View>
              </View>
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
          {renderContentSectionOverlay(ContentSectionForm.Badan)}
          {data.body ? (
            isPreview ? (
              <Html
                renderers={{
                  table: (node, index) => (
                    <View
                      key={index}
                      style={{ ...styles.table, ...node.style[0] }}
                    >
                      {node.children}
                    </View>
                  ),
                  tr: (node, index) => (
                    <View key={index} style={styles.tableRow}>
                      {node.children}
                    </View>
                  ),
                  td: (node, index) => (
                    <View key={index} style={styles.tableCol}>
                      {node.children}
                    </View>
                  ),
                }}
                stylesheet={CSSStyles}
              >
                {data.body}
              </Html>
            ) : (
              <div>{data.body}</div>
            )
          ) : (
            <Text style={{ ...styles.text, ...styles.empty }}>
              Sorot dan klik pada bagian ini untuk menampilkan teks editor isian
              badan surat.
            </Text>
          )}
        </View>
        <View
          style={{
            ...styles.column,
            position: 'relative',
            marginTop: 54,
          }}
        >
          {renderContentSectionOverlay(ContentSectionForm.Kaki)}
          <View
            style={{
              ...styles.column,
              alignItems: 'center',
              marginLeft: 'auto',
              width: 302,
            }}
            wrap
            break
          >
            <Text style={{ marginBottom: 8 }}>JABATAN PENANDATANGAN</Text>
            <View style={{ ...styles.row, ...styles.signatureBox }}>
              <View
                style={{
                  ...styles.column,
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <View style={styles.column}>
                  <Text style={{ ...styles.text, ...styles.textSmall }}>
                    Ditandatangani secara elektronik oleh:
                  </Text>
                  <Text
                    style={{
                      ...styles.text,
                      ...styles.textSmall,
                      ...(!data.penandatangan ? styles.empty : {}),
                    }}
                  >
                    {data.penandatangan?.jabatan || 'JABATAN PENANDATANGAN'}
                  </Text>
                </View>
                <View style={styles.column}>
                  <Text
                    style={{
                      ...styles.text,
                      ...styles.textSmall,
                      ...(!data.penandatangan ? styles.empty : {}),
                    }}
                  >
                    {data.penandatangan?.nama || 'NAMA PENANDATANGAN'}
                  </Text>
                  <Text
                    style={{
                      ...styles.text,
                      ...styles.textSmall,
                      ...(!data.penandatangan ? styles.empty : {}),
                    }}
                  >
                    {data.penandatangan?.pangkat || 'Pangkat Penandatangan'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {data.tembusan && data.tembusan.length > 0 && (
            <View style={styles.column}>
              <Text style={styles.text}>Tembusan:</Text>
              {data.tembusan.map((tembusan, i) => (
                <Text key={tembusan} style={styles.text}>
                  {i + 1}. Yth. {tembusan}
                </Text>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default SuratBiasa;
