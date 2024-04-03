import { LoadingDots } from "@/components/ui/loading";

export default function PokemonLoading() {
  return (
    <div
      className="flex h-full"
      style={{
        height: "100dvh",
        display: "flex",
        paddingTop: "auto",
        paddingBottom: "auto",
      }}
    >
      <LoadingDots />
    </div>
  );
}
