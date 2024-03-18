type TileProps = {
  children: React.ReactNode;
};

export default function Tile({ children }: TileProps) {
  return (
    <div className="inline-block text-xs text-secondary-400 bg-secondary-100 rounded-sm py-1.5 px-2.5 ">
      {children}
    </div>
  );
}
