import ResultsCount from './ResultsCount';
import SortButtonsGroup from './SortButtonsGroup';

export default function SidebarTop() {
  return (
    <div className="flex justify-between border-b px-4 pb-3">
      <ResultsCount count={40} />
      <SortButtonsGroup />
    </div>
  );
}
