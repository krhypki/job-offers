type EmptyStateProps = {
  children: React.ReactNode;
};

export default function EmptyState({ children }: EmptyStateProps) {
  return (
    <div className="flex flex-col justify-center items-center h-full mx-auto ">
      {children}
    </div>
  );
}
