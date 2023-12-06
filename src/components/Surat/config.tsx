import { Font, StyleSheet, View } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';
import { CSSProperties } from 'react';
import { HtmlStyles } from 'react-pdf-html';
import { HtmlElement } from 'react-pdf-html/dist/parse';
import { HtmlRenderers } from 'react-pdf-html/dist/render';

type Node = React.PropsWithChildren<{
  element: HtmlElement;
  style: Style[];
  stylesheets: HtmlStyles[];
}>;

Font.registerHyphenationCallback((word) => [word]);

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: '/fonts/Arial.ttf',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/ArialI.ttf',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    {
      src: '/fonts/ArialBD.ttf',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: '/fonts/ArialBI.ttf',
      fontStyle: 'italic',
      fontWeight: 600,
    },
    {
      src: '/fonts/ArialBLK.ttf',
      fontStyle: 'normal',
      fontWeight: 800,
    },
  ],
});

export const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    paddingTop: 36,
    paddingBottom: 95,
    paddingLeft: 113,
    paddingRight: 76,
    width: 794,
    height: 1123,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontSize: 16,
    lineHeight: 1.5,
    fontFamily: 'Arial',
    fontWeight: 400,
  },
  signatureBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 95,
    border: '1px solid black',
    borderRadius: 8,
    padding: 8,
    width: '100%',
  },
  textSmall: {
    fontSize: 10,
  },
  bold: {
    fontWeight: 600,
    fontSize: '1em',
  },
  italic: {
    fontStyle: 'italic',
    fontSize: '1em',
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  textJustify: {
    textAlign: 'justify',
  },
  empty: {
    color: 'red',
  },
  table: {
    // @ts-ignore
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    width: '100%',
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCol: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 8,
  },
});

export const CSSStyles: { [key: string]: CSSProperties } = {
  p: {
    fontSize: 16,
    margin: 0,
    lineHeight: 1.5,
    fontFamily: 'Arial',
    fontWeight: 400,
  },
  span: {
    margin: 0,
    lineHeight: 1.5,
    fontFamily: 'Arial',
    fontWeight: 400,
    fontSize: 16,
  },
  h1: {
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  h2: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h6: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  strong: {
    fontWeight: 700,
  },
  em: {
    fontStyle: 'italic',
  },
};

export const renderers: HtmlRenderers = {
  table: (node: Node, index: number) => (
    <View key={index} style={{ ...styles.table, ...node.style[0] }}>
      {node.children}
    </View>
  ),
  tr: (node: Node, index: number) => (
    <View key={index} style={styles.tableRow}>
      {node.children}
    </View>
  ),
  td: (node: Node, index: number) => (
    <View key={index} style={{ ...styles.tableCol, ...node.style[0] }}>
      {node.children}
    </View>
  ),
};
