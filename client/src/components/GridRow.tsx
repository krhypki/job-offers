type GridRowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GridRow({ children, className }: GridRowProps) {
  return <div className={`grid grid-cols-12 ${className}`}>{children}</div>;
}
