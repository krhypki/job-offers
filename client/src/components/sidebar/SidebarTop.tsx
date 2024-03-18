import ResultsCount from './ResultsCount';
import SortButtonsGroup from './SortButtonsGroup';

export default function SidebarTop() {
  return (
    <div className="flex justify-between px-4">
      <ResultsCount count={40} />
      <SortButtonsGroup />
    </div>
  );
}
