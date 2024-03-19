type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children }: ContainerProps) {
  return <div className="w-full max-w-5xl mx-auto px-4">{children}</div>;
}
