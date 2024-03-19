import { SortBy } from '../../lib/types';
import Button from '../general/Button';

type SortButtonProps = {
  sortBy: SortBy;
  isActive: boolean;
  onClick: () => void;
};

export default function SortButton({
  onClick,
  sortBy,
  isActive,
}: SortButtonProps) {
  return (
    <Button onClick={onClick} variant={isActive ? 'active' : 'secondary'}>
      {sortBy}
    </Button>
  );
}
