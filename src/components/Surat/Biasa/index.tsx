import { Document, Page, Text, View } from '@react-pdf/renderer';
import format from 'date-fns/format';
import { id } from 'date-fns/locale';
import React from 'react';

import { ContentSectionForm, SuratBiasa, SuratProps } from '@/types/surat';
import { Html } from 'react-pdf-html';
import ContentSectionOverlay from '../ContentSectionOverlay';
import Kaki from '../Element/Kaki';
import Kop from '../Element/Kop';
import Lampiran from '../Element/Lampiran';
import { CSSStyles, renderers, styles } from '../config';

const SuratBiasa: React.FC<SuratProps<SuratBiasa>> = ({
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
        style={{ ...styles.page, ...styles.column, gap: 18 }}
        size="A4"
        dpi={96}
        wrap
      >
        <Kop
          isPreview={isPreview}
          data={data}
          setContentForm={setContentForm}
        />
        <View style={{ ...styles.row, justifyContent: 'flex-end' }}>
          <View style={{ ...styles.row, flexWrap: 'wrap', width: 234 }}>
            <Text
              style={{
                ...styles.text,
                ...(!data.tempatPenulisan ? styles.empty : {}),
              }}
            >
              {data.tempatPenulisan || 'Tempat belum diisi'},{' '}
            </Text>
            <Text style={{ ...styles.text }}>
              {format(data.tanggalPenulisan!, 'dd MMMM yyyy', { locale: id })}
            </Text>
          </View>
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
                {data.lampiran && data.tipeTujuan === 'Lampiran'
                  ? `${data.lampiran.length} Berkas`
                  : '-'}
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
                <View style={styles.column}>
                  {data.penerima && data.penerima.length > 0 ? (
                    data.penerima.map((penerima, i) => (
                      <Text
                        key={penerima.NIP}
                        style={{ ...styles.text, width: 199 }}
                      >
                        {data.penerima?.length === 1
                          ? penerima.nama
                          : `${i + 1}. ${penerima.nama}`}
                      </Text>
                    ))
                  ) : (
                    <Text
                      style={{ ...styles.text, width: 199, ...styles.empty }}
                    >
                      Tujuan belum diisi
                    </Text>
                  )}
                </View>
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
              <Html renderers={renderers} stylesheet={CSSStyles}>
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
        <Kaki
          data={data}
          isPreview={isPreview}
          setContentForm={setContentForm}
          withTembusan
        />
      </Page>
      {data.lampiran &&
        data.lampiran.length > 0 &&
        data.lampiran.map((lampiran) => (
          <Lampiran
            key={lampiran.id}
            data={data}
            body={lampiran.body}
            id={lampiran.id}
            isPreview={isPreview}
            setContentForm={setContentForm}
          />
        ))}
    </Document>
  );
};

export default SuratBiasa;
