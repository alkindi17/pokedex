export default function PokemonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="relative min-h-[100dvh]">{children}</div>;
}
