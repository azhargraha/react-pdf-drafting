import { useSuratContext } from '@/contexts/surat/Provider';
import { pdf } from '@react-pdf/renderer';
import PDFMerger from 'pdf-merger-js/browser';
import { ReactElement, useCallback, useEffect, useState } from 'react';

const useMergePDF = (doc: ReactElement) => {
  const { state } = useSuratContext();
  const [mergedUrl, setMergedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const generatePdfDocument = useCallback(async () => {
    const blob = await pdf(doc).toBlob();
    const merger = new PDFMerger();
    await merger.add(blob);

    if (state.files && state.files.length > 0) {
      for (const { file } of state.files) {
        await merger.add(file);
      }
    }

    const mergedPdf = await merger.saveAsBlob();
    const mergedPdfLampiran = URL.createObjectURL(mergedPdf);

    setMergedUrl(mergedPdfLampiran);
    setIsLoading(false);
  }, [state]);

  const downloadDocument = (filename: string) => {
    const link = document.createElement('a');
    link.href = mergedUrl;
    link.download = `${filename}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setIsLoading(true);
    generatePdfDocument();
  }, [generatePdfDocument]);

  return { mergedUrl, isLoading, downloadDocument };
};

export default useMergePDF;
