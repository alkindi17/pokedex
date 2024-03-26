export default function PokemonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className=" relative min-h-screen bg-[#f5f5f5]">{children}</div>;
}
