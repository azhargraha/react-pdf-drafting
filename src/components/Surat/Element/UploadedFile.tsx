import DeleteButton from '@/components/DeleteButton';
import { useSuratContext } from '@/contexts/surat/Provider';
import { LampiranFile } from '@/types/surat';
import formatFileSize from '@/utils/formatFileSize';
import { FileIcon } from '@radix-ui/react-icons';
import React from 'react';

interface UploadedFileProps {
  file: LampiranFile['file'];
  id: LampiranFile['id'];
}

const UploadedFile: React.FC<UploadedFileProps> = ({ id, file }) => {
  const { dispatch } = useSuratContext();

  return (
    <div className="w-full flex justify-between items-center p-2 border border-gray-400">
      <div className="flex items-center gap-2">
        <FileIcon height={20} width={20} stroke="#2563eb" />
        <p>{file.name}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-xs text-gray-400 ">{formatFileSize(file.size)}</p>
        <DeleteButton onClick={() => dispatch.deleteFile(id)} />
      </div>
    </div>
  );
};

export default UploadedFile;
