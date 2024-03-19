import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Input from '../general/Input';
import { useSearchQueryContext } from '../../lib/hooks/contexts';

type SearchFormProps = {
  placeholder: string;
};

export default function SearchForm({ placeholder }: SearchFormProps) {
  const { query, onQueryChange } = useSearchQueryContext();

  return (
    <form className="w-full max-w-xl relative">
      <button className="absolute z-10 top-1/2 left-2 -translate-y-1/2">
        <MagnifyingGlassIcon height="24" width="24" />
      </button>
      <Input
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder={placeholder}
        required
      />
    </form>
  );
}
