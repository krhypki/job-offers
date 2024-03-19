import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Input from '../general/Input';
import useInput from '../../lib/hooks/useInput';

type SearchFormProps = {
  placeholder: string;
};

export default function SearchForm({ placeholder }: SearchFormProps) {
  const [searchValue, onSearchChange] = useInput('');

  return (
    <form className="w-full max-w-xl relative">
      <button className="absolute z-10 top-1/2 left-2 -translate-y-1/2">
        <MagnifyingGlassIcon height="24" width="24" />
      </button>
      <Input
        value={searchValue}
        onChange={onSearchChange}
        placeholder={placeholder}
        required
      />
    </form>
  );
}
