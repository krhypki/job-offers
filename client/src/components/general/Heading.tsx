import { useMemo } from 'react';

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingProps = {
  tag: Heading;
  variant?: Heading;
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  tag,
  variant,
  children,
  className,
  ...attrs
}: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) {
  const Tag = tag;

  const getSizeClassList = useMemo(() => {
    switch (variant || tag) {
      case 'h1':
        return 'text-4xl';
      case 'h2':
        return 'text-3xl';
      case 'h3':
        return 'text-2xl';
      case 'h4':
        return 'text-xl';
      case 'h5':
        return 'text-lg';
      case 'h6':
        return 'text-md';
      default:
        return 'text-base';
    }
  }, [tag, variant]);

  return (
    <Tag className={`font-medium ${getSizeClassList} ${className}`} {...attrs}>
      {children}
    </Tag>
  );
}
