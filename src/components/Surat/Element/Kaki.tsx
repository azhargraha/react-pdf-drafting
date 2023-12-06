import { Text, View } from '@react-pdf/renderer';
import format from 'date-fns/format';
import { id } from 'date-fns/locale';
import React from 'react';

import { ContentSectionForm, Surat, SuratProps } from '@/types/surat';
import ContentSectionOverlay from '../ContentSectionOverlay';
import { styles } from '../config';

interface KakiProps extends SuratProps<Surat> {
  withTTP?: boolean; // tempat tanggal penulisan
  withTembusan?: boolean;
}

const Kaki: React.FC<KakiProps> = ({
  data,
  isPreview,
  setContentForm,
  withTTP = false,
  withTembusan = false,
}) => {
  const renderContentSectionOverlay = (form: ContentSectionForm) =>
    !isPreview && (
      <ContentSectionOverlay
        onClick={() => setContentForm && setContentForm(form)}
      />
    );

  return (
    <View
      style={{
        ...styles.column,
        position: 'relative',
        marginTop: 54,
      }}
    >
      {renderContentSectionOverlay(ContentSectionForm.Kaki)}
      {withTTP && (
        <View
          style={{
            ...styles.column,
            marginLeft: 'auto',
            alignItems: 'center',
            width: 302,
            marginBottom: 16,
          }}
          wrap
          break
        >
          <Text style={styles.text}>Ditetapkan di {data.tempatPenulisan}</Text>
          <Text style={styles.text}>
            Pada Tanggal{' '}
            {format(data.tanggalPenulisan!, 'dd MMMM yyyy', { locale: id })}
          </Text>
        </View>
      )}
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
        <Text
          style={{
            ...styles.text,
            ...styles.textUppercase,
            marginBottom: 8,
            ...(!data.penandatangan ? styles.empty : {}),
          }}
        >
          {data.penandatangan?.jabatan || 'JABATAN PENANDATANGAN'}
        </Text>
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
      {withTembusan && data.tembusan && data.tembusan.length > 0 && (
        <View style={styles.column}>
          <Text style={styles.text}>Tembusan:</Text>
          {data.tembusan.map((tembusan, i) => (
            <Text key={tembusan.NIP} style={styles.text}>
              {i + 1}. Yth. {tembusan.nama}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Kaki;
