import { useMemo } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'active';
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  children,
  variant = 'primary',
  onClick,
  className,
  ...attrs
}: ButtonProps) {
  const variantClassName = useMemo(() => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-200 text-white';
      case 'secondary':
        return 'bg-secondary-300 text-black';
      case 'active':
        return 'bg-black text-white';
      default:
        return 'bg-primary-200 text-white';
    }
  }, [variant]);

  return (
    <button
      {...attrs}
      className={`text-[10px] py-[6px] px-[5px] rounded uppercase ${variantClassName} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
