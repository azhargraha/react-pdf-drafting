import Button from '@/components/Button';
import React, { ChangeEvent, ReactNode } from 'react';

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
              Buat Lampiran
            </Button>
            <Button className="flex-1" color="secondary">
              <input
                type="file"
                accept="application/pdf"
                multiple
                onChange={uploadFile}
              />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceholderForm;
