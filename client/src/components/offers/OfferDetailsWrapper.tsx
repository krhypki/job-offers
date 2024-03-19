type OfferDetailsWrapperProps = {
  children: React.ReactNode;
};

export default function OfferDetailsWrapper({
  children,
}: OfferDetailsWrapperProps) {
  return (
    <section className="max-lg:col-span-12 col-span-8 bg-secondary-300">
      {children}
    </section>
  );
}
