import { Document, Page, Text, View } from '@react-pdf/renderer';
import React from 'react';

import {
  ContentSectionForm,
  Employee,
  SuratPerintah,
  SuratProps,
} from '@/types/surat';
import { Html } from 'react-pdf-html';
import ContentSectionOverlay from '../ContentSectionOverlay';
import Kaki from '../Element/Kaki';
import Kop from '../Element/Kop';
import { CSSStyles, renderers, styles } from '../config';

interface PenerimaProps {
  option: Employee | null;
  number?: number;
}

const Penerima: React.FC<PenerimaProps> = ({ option, number = 1 }) => (
  <View
    key={option?.nama}
    style={{
      width: 500,
      ...styles.row,
      gap: 18,
    }}
  >
    <Text
      style={{
        ...styles.text,
        width: 32,
      }}
    >
      {number}.
    </Text>
    <View style={{ ...styles.column }}>
      <View style={{ ...styles.row, gap: 6 }}>
        <Text style={{ ...styles.text, width: 140 }}>Nama</Text>
        <Text style={styles.text}>:</Text>
        <Text
          style={{
            width: 271,
            ...styles.text,
            ...(!option ? styles.empty : {}),
          }}
        >
          {option?.nama || 'Nama'}
        </Text>
      </View>
      <View style={{ ...styles.row, gap: 6 }}>
        <Text style={{ ...styles.text, width: 140 }}>Pangkat/golongan</Text>
        <Text style={styles.text}>:</Text>
        <Text
          style={{
            width: 271,
            ...styles.text,
            ...(!option ? styles.empty : {}),
          }}
        >
          {option?.pangkat || 'Pangkat/golongan'}
        </Text>
      </View>
      <View style={{ ...styles.row, gap: 6 }}>
        <Text style={{ ...styles.text, width: 140 }}>NIP</Text>
        <Text style={styles.text}>:</Text>
        <Text
          style={{
            width: 271,
            ...styles.text,
            ...(!option ? styles.empty : {}),
          }}
        >
          {option?.NIP || 'NIP'}
        </Text>
      </View>
      <View style={{ ...styles.row, gap: 6 }}>
        <Text style={{ ...styles.text, width: 140 }}>Jabatan</Text>
        <Text style={styles.text}>:</Text>
        <Text
          style={{
            width: 271,
            ...styles.text,
            ...(!option ? styles.empty : {}),
          }}
        >
          {option?.jabatan || 'Jabatan'}
        </Text>
      </View>
    </View>
  </View>
);

const SuratPerintah: React.FC<SuratProps<SuratPerintah>> = ({
  isPreview = false,
  data,
  setContentForm,
}) => {
  const renderContentSectionOverlay = (form: ContentSectionForm) =>
    !isPreview && (
      <ContentSectionOverlay
        onClick={() => setContentForm && setContentForm(form)}
      />
    );

  return (
    <Document>
      <Page
        style={{
          ...styles.page,
          ...styles.column,
          gap: 18,
          border: !isPreview ? '1px solid #9ca3af' : 'none',
        }}
        size="A4"
        dpi={96}
        wrap
      >
        <Kop
          isPreview={isPreview}
          data={data}
          setContentForm={setContentForm}
        />
        <View style={{ ...styles.row, justifyContent: 'center' }}>
          <Text style={{ ...styles.text, ...styles.textUppercase }}>
            Surat Perintah
          </Text>
        </View>
        <View style={{ position: 'relative' }}>
          {renderContentSectionOverlay(ContentSectionForm.Kepala)}
          <View style={{ ...styles.column, gap: 20 }}>
            <View style={{ ...styles.row, gap: 6, justifyContent: 'center' }}>
              <Text style={{ ...styles.text, ...styles.textUppercase }}>
                Nomor
              </Text>
              <Text style={styles.text}>:</Text>
              <Text style={{ ...styles.text }}>
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
            <View style={{ ...styles.row, gap: 18 }}>
              <Text
                style={{ ...styles.text, ...styles.textUppercase, width: 60 }}
              >
                Dasar
              </Text>
              <Text style={styles.text}>:</Text>
              {data.dasar ? (
                isPreview ? (
                  <View style={{ width: 540 }}>
                    <Html renderers={renderers} stylesheet={CSSStyles}>
                      {data.dasar}
                    </Html>
                  </View>
                ) : (
                  <div>{data.body}</div>
                )
              ) : (
                <Text
                  style={{
                    width: 540,
                    ...styles.text,
                    ...styles.empty,
                  }}
                >
                  Sorot dan klik bagian ini untuk menampilkan teks editor di
                  sebelah kanan halaman
                </Text>
              )}
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.column,
            position: 'relative',
            gap: 18,
          }}
        >
          {renderContentSectionOverlay(ContentSectionForm.Badan)}
          <View style={{ ...styles.row, justifyContent: 'center' }}>
            <Text style={{ ...styles.text, ...styles.textUppercase }}>
              Memerintahkan
            </Text>
          </View>
          <View style={{ ...styles.row, gap: 18 }}>
            <Text style={{ ...styles.text, width: 60 }}>Kepada</Text>
            <Text style={styles.text}>:</Text>
            <View style={{ ...styles.column, gap: 18 }}>
              {data.penerima && data.penerima.length > 0 ? (
                data.penerima.map((option, i) => (
                  <Penerima key={option.NIP} option={option} number={i + 1} />
                ))
              ) : (
                <Penerima option={null} />
              )}
            </View>
          </View>
          <View style={{ ...styles.row, gap: 18 }}>
            <Text style={{ ...styles.text, width: 60 }}>Untuk</Text>
            <Text style={styles.text}>:</Text>
            {data.body ? (
              isPreview ? (
                <View
                  style={{
                    width: 510,
                    marginLeft: 'auto',
                  }}
                >
                  <Html renderers={renderers} stylesheet={CSSStyles}>
                    {data.body}
                  </Html>
                </View>
              ) : (
                <div>{data.body}</div>
              )
            ) : (
              <View style={{ ...styles.column, gap: 6 }}>
                {[1, 2, 3].map((number) => (
                  <View
                    key={number}
                    style={{
                      ...styles.row,
                      gap: 18,
                    }}
                  >
                    <Text style={{ ...styles.text, ...styles.empty }}>
                      {number}.
                    </Text>
                    <Text
                      style={{
                        ...styles.text,
                        ...styles.empty,
                        width: 480,
                      }}
                    >
                      Sorot dan klik pada bagian ini untuk menampilkan teks
                      editor di sebelah kanan halaman.
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
        <Kaki
          data={data}
          isPreview={isPreview}
          setContentForm={setContentForm}
          withTTP
        />
      </Page>
    </Document>
  );
};

export default SuratPerintah;
