import { Font, StyleSheet, View } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';
import React, { CSSProperties } from 'react';
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
  family: 'andale mono',
  fonts: [
    {
      src: '/fonts/andale-mono/ANDALEMO.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/andale-mono/ANDALEMO.TTF',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    {
      src: '/fonts/andale-mono/ANDALEMO.TTF',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: '/fonts/andale-mono/ANDALEMO.TTF',
      fontStyle: 'italic',
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'arial',
  fonts: [
    {
      src: '/fonts/arial/Arial.ttf',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/arial/ArialI.ttf',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    {
      src: '/fonts/arial/ArialBD.ttf',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: '/fonts/arial/ArialBI.ttf',
      fontStyle: 'italic',
      fontWeight: 600,
    },
    {
      src: '/fonts/arial/ArialBLK.ttf',
      fontStyle: 'normal',
      fontWeight: 800,
    },
  ],
});

Font.register({
  family: 'arial black',
  fonts: [
    {
      src: '/fonts/arial-black/ArialBLK.ttf',
      fontStyle: 'normal',
      fontWeight: 800,
    },
    {
      src: '/fonts/arial-black/ArialBLKZ.ttf',
      fontStyle: 'italic',
      fontWeight: 800,
    },
  ],
});

Font.register({
  family: 'book antiqua',
  fonts: [
    {
      src: '/fonts/book-antiqua/BKANT.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/book-antiqua/ANTQUAI.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/book-antiqua/ANTQUAB.TTF',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: '/fonts/book-antiqua/ANTQUABI.TTF',
      fontStyle: 'italic',
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'comic sans ms',
  fonts: [
    {
      src: '/fonts/comic-sans-ms/COMIC.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/comic-sans-ms/COMICI.TTF',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    {
      src: '/fonts/comic-sans-ms/COMICBD.TTF',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: '/fonts/comic-sans-ms/COMICZ.TTF',
      fontStyle: 'italic',
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'courier new',
  fonts: [
    {
      src: '/fonts/courier-new/COUR.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/courier-new/COURI.TTF',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    {
      src: '/fonts/courier-new/COURBD.TTF',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: '/fonts/courier-new/COURBI.TTF',
      fontStyle: 'italic',
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'georgia',
  fonts: [
    {
      src: '/fonts/georgia/GEORGIA.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/georgia/GEORGIAI.TTF',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    {
      src: '/fonts/georgia/GEORGIAB.TTF',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: '/fonts/georgia/GEORGIAZ.TTF',
      fontStyle: 'italic',
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'helvetica',
  fonts: [
    {
      src: '/fonts/helvetica/Helvetica.ttf',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/helvetica/Helvetica.ttf',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    {
      src: '/fonts/helvetica/HelveticaB.ttf',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: '/fonts/helvetica/HelveticaB.ttf',
      fontStyle: 'italic',
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'impact',
  fonts: [
    {
      src: '/fonts/impact/IMPACT.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/impact/IMPACT.TTF',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    {
      src: '/fonts/impact/IMPACT.TTF',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: '/fonts/impact/IMPACT.TTF',
      fontStyle: 'italic',
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'impact',
  fonts: [
    {
      src: '/fonts/impact/IMPACT.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/impact/IMPACT.TTF',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    {
      src: '/fonts/impact/IMPACT.TTF',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: '/fonts/impact/IMPACT.TTF',
      fontStyle: 'italic',
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'symbol',
  fonts: [
    {
      src: '/fonts/symbol/SYMBOL.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/symbol/SYMBOL.TTF',
      fontStyle: 'italic',
      fontWeight: 400,
    },
  ],
});

Font.register({
  family: 'tahoma',
  fonts: [
    {
      src: '/fonts/tahoma/TAHOMA.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/tahoma/TAHOMA.TTF',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    {
      src: '/fonts/tahoma/TAHOMABD.TTF',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: '/fonts/tahoma/TAHOMABD.TTF',
      fontStyle: 'italic',
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'terminal',
  fonts: [
    {
      src: '/fonts/terminal/Terminal.ttf',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/terminal/Terminal.ttf',
      fontStyle: 'italic',
      fontWeight: 400,
    },
  ],
});

Font.register({
  family: 'times new roman',
  fonts: [
    {
      src: '/fonts/times-new-roman/TIMES.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/times-new-roman/TIMESI.TTF',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    {
      src: '/fonts/times-new-roman/TIMESBD.TTF',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: '/fonts/times-new-roman/TIMESBI.TTF',
      fontStyle: 'italic',
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'times new roman',
  fonts: [
    {
      src: '/fonts/times-new-roman/TIMES.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/times-new-roman/TIMESI.TTF',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    {
      src: '/fonts/times-new-roman/TIMESBD.TTF',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: '/fonts/times-new-roman/TIMESBI.TTF',
      fontStyle: 'italic',
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'trebuchet ms',
  fonts: [
    {
      src: '/fonts/trebuchet-ms/TREBUC.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/trebuchet-ms/TREBUCIT.TTF',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    {
      src: '/fonts/trebuchet-ms/TREBUCBD.TTF',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: '/fonts/trebuchet-ms/TREBUCBI.TTF',
      fontStyle: 'italic',
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'verdana',
  fonts: [
    {
      src: '/fonts/verdana/VERDANA.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/verdana/VERDANAI.TTF',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    {
      src: '/fonts/verdana/VERDANAB.TTF',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: '/fonts/verdana/VERDANAZ.TTF',
      fontStyle: 'italic',
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'webdings',
  fonts: [
    {
      src: '/fonts/webdings/WEBDINGS.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/webdings/WEBDINGS.TTF',
      fontStyle: 'italic',
      fontWeight: 400,
    },
  ],
});

Font.register({
  family: 'wingdings',
  fonts: [
    {
      src: '/fonts/wingdings/WINGDINGS.TTF',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: '/fonts/wingdings/WINGDINGS.TTF',
      fontStyle: 'italic',
      fontWeight: 400,
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
    fontFamily: 'arial',
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
    fontFamily: 'arial',
    fontWeight: 400,
  },
  span: {
    margin: 0,
  },
  ol: {
    margin: 0,
    marginLeft: -11.2,
    padding: 0,
    lineHeight: 1.5,
  },
  ul: {
    margin: 0,
    marginLeft: -16,
    padding: 0,
    lineHeight: 1.5,
  },
  li: {
    fontFamily: 'arial',
    fontWeight: 400,
    fontSize: 16,
  },
  h1: {
    fontSize: 48,
    fontWeight: 'bold',
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
    fontWeight: 600,
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
