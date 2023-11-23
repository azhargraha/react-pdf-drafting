import { Text } from '@react-pdf/renderer';
import { DomElement } from 'domhandler';

import { styles } from './config';

const transformToPdfComponent = (node: DomElement, index: number) => {
  if (node.type === 'tag') {
    const { name, children, attribs } = node;
    const key = `${name}-${index}`;

    const textAlign = () => {
      if (attribs?.style?.includes('text-align: center')) {
        return styles.textCenter;
      }
      if (attribs?.style?.includes('text-align: right')) {
        return styles.textRight;
      }
      if (attribs?.style?.includes('text-align: justify')) {
        return styles.textJustify;
      }

      return styles.textLeft;
    };

    const fontStyle = attribs?.style?.includes('font-style: italic')
      ? styles.italic
      : {};

    const fontWeight = attribs?.style?.includes('font-weight: bold')
      ? styles.bold
      : {};

    switch (name) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        const headingLevel = Number(name.charAt(1));

        return (
          <Text
            key={key}
            style={{
              ...styles.text,
              ...styles.bold,
              ...textAlign(),
              ...fontStyle,
              fontSize: 30 - (headingLevel - 1) * 4,
            }}
          >
            {children?.map(transformToPdfComponent) || ''}
          </Text>
        );
      case 'p':
        return (
          <Text
            key={key}
            style={{
              ...styles.text,
              ...textAlign(),
              ...fontWeight,
              ...fontStyle,
            }}
          >
            {children?.map(transformToPdfComponent)}
          </Text>
        );
      case 'em':
        return (
          <Text key={key} style={{ ...styles.text, ...styles.italic }}>
            {children?.map(transformToPdfComponent)}
          </Text>
        );
      case 'strong':
        return (
          <Text key={key} style={{ ...styles.text, ...styles.bold }}>
            {children?.map(transformToPdfComponent)}
          </Text>
        );
      case 'pre':
        return (
          <Text key={key} style={{ ...styles.text }}>
            {children?.map(transformToPdfComponent) || ''}
          </Text>
        );

      default:
        return node.data;
    }
  } else if (node.type === 'text') {
    return node.data;
  }

  return undefined;
};

export default transformToPdfComponent;
