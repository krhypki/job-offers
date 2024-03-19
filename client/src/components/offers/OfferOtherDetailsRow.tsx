import GridRow from '../general/layout/GridRow';
import Heading from '../general/Heading';

type OfferOtherDetailsRowType = {
  children: React.ReactNode;
  heading: string;
};

export default function OfferOtherDetailsRow({
  children,
  heading,
}: OfferOtherDetailsRowType) {
  return (
    <GridRow className="mb-8">
      <div className="max-sm:col-span-12 col-span-4">
        <Heading className="max-sm:mb-4" tag="h4" variant="h5">
          {heading}
        </Heading>
      </div>
      <div className="col-span-8">{children}</div>
    </GridRow>
  );
}
