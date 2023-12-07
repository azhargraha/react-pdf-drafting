import { useDebouncedCallback } from './useDebounce';

const useTextfieldDebounce = () =>
  useDebouncedCallback((cb: () => void) => cb(), 500);

export default useTextfieldDebounce;
