type EmptyStateProps = {
  children: React.ReactNode;
};

export default function EmptyState({ children }: EmptyStateProps) {
  return (
    <div className="flex justify-center items-center h-full mx-auto">
      {children}
    </div>
  );
}
