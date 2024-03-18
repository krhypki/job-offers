type ResultsCountProps = {
  count: number;
};

export default function ResultsCount({ count }: ResultsCountProps) {
  return <small>{count} results</small>;
}
