import Button from '@/components/Button';
import { FilePlusIcon, UploadIcon } from '@radix-ui/react-icons';
import React, { ChangeEvent, ReactNode, useRef } from 'react';

interface PlaceholderFormProps {
  children: ReactNode;
  withLampiran?: boolean;
  uploadFile?: (e: ChangeEvent<HTMLInputElement>) => void;
  addLampiran?: () => void;
}

const PlaceholderForm: React.FC<PlaceholderFormProps> = ({
  children,
  withLampiran = false,
  uploadFile = () => {},
  addLampiran = () => {},
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col justify-between items-center gap-6 flex-1 h-full  overflow-hidden">
      <div className="h-[70vh] overflow-y-auto overflow-x-hidden">
        <div className="scale-[.42] translate-x-[1%] origin-top">
          {children}
        </div>
      </div>
      {withLampiran && (
        <div className="w-full bg-white">
          <div className="flex flex-col gap-4">
            <Button className="flex-1" onClick={addLampiran}>
              <span className="w-full text-left">Buat Lampiran</span>
              <FilePlusIcon height={18} width={18} />
            </Button>
            <Button className="flex-1" color="secondary">
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                multiple
                onClick={(e) => {
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
                onChange={uploadFile}
                className="hidden"
                id="file"
              />
              <label htmlFor="file" className="w-full cursor-pointer text-left">
                Upload file
              </label>
              <UploadIcon height={18} width={18} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceholderForm;
