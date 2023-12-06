import SuratPerintah from '@/components/Surat/Perintah';
import { useSuratContext } from '@/contexts/surat/Provider';

const ComponentBased = () => {
  const { state } = useSuratContext();

  return (
    <div className="w-full overflow-auto py-8">
      <div className="mx-auto w-fit">
        <SuratPerintah data={state} />
      </div>
    </div>
  );
};

ComponentBased.title = 'Component Based';

export default ComponentBased;
