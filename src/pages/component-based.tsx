import SuratBiasa from '@/components/Surat/Biasa';
import { useSuratBiasaContext } from '@/contexts/surat/Provider';

const ComponentBased = () => {
  const { state } = useSuratBiasaContext();

  return (
    <div className="w-full overflow-auto py-8">
      <div className="mx-auto w-fit">
        <SuratBiasa data={state} />
      </div>
    </div>
  );
};

ComponentBased.title = 'Component Based';

export default ComponentBased;
