import { IconProps } from '@radix-ui/react-icons/dist/types';

type OfferFeatureProps = {
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  children: React.ReactNode;
};

export default function OfferFeature({ Icon, children }: OfferFeatureProps) {
  return (
    <div className="flex items-center">
      <div className="bg-secondary-100 p-2 rounded-full mr-2">
        <Icon />
      </div>
      <small>{children}</small>
    </div>
  );
}
