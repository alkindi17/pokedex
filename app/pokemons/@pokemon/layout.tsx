export default function PokemonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="relative min-h-[100dvh] bg-[#f5f5f5]">{children}</div>;
}
