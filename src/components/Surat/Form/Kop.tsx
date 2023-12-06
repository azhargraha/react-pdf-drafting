import RadioGroup from '@/components/Radio/Group';
import { levelKopOptions } from '@/dummy';
import { LevelKop } from '@/types/surat';
import { Option } from '@/types/input';
import Select from '@/components/Select';
import React from 'react';
import { useSuratContext } from '@/contexts/surat/Provider';

const KopForm = () => {
  const { state, dispatch } = useSuratContext();

  return (
    <>
      <RadioGroup
        name="levelSurat"
        id="lavel-surat"
        options={levelKopOptions}
        label="Level Kop Surat"
        defaultOption={levelKopOptions[0]}
        onChange={(e) => dispatch.setLevelSurat(e.target.value as LevelKop)}
      />
      {state.levelSurat === LevelKop.UPTD && (
        <Select
          label="Pilih UPTD"
          placeholder="Pilih UPTD"
          name="uptd"
          id="uptd"
          onChange={(selected) =>
            dispatch.setUptd((selected as Option).value || '')
          }
          options={levelKopOptions}
        />
      )}
    </>
  );
};

export default KopForm;
