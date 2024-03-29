import { useOffersContext } from '../../lib/hooks/contexts';
import { SortBy } from '../../lib/types';

import SortButton from './SortButton';

export default function SortButtonsGroup() {
  const { sortBy, handleChangeSortBy } = useOffersContext();
  const sortOptions: SortBy[] = ['salary', 'recent'];

  return (
    <div className="flex gap-2">
      {sortOptions.map((option) => (
        <SortButton
          key={option}
          onClick={() => handleChangeSortBy(option)}
          sortBy={option}
          isActive={sortBy === option}
        />
      ))}
    </div>
  );
}
