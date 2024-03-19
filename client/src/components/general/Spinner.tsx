type SpinnerProps = {
  variant?: 'primary' | 'secondary';
};

export default function Spinner({ variant = 'primary' }: SpinnerProps) {
  return (
    <div
      className={`animate-spin h-20 w-20 border-4  border-b-0 border-r-0 rounded-full ${
        variant === 'primary' ? 'border-primary-100' : 'border-secondary-100'
      }`}
    ></div>
  );
}
