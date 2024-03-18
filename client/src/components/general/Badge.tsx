type BadgeProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  isLarge?: boolean;
};

export default function Badge({
  children,
  variant = 'secondary',
  isLarge = false,
}: BadgeProps) {
  return (
    <div
      className={` 
        ${isLarge ? 'text-xl w-14 h-16' : 'text-sm h-12 w-10'}
        ${
          variant === 'primary'
            ? 'bg-primary-200 text-white'
            : 'bg-secondary-300 text-black'
        }
        flex items-center justify-center rounded font-semibold uppercase`}
    >
      {children}
    </div>
  );
}
