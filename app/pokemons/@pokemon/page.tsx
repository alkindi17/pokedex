import PokeBall from "@/public/svg/pokeball.svg";

export default function Pokemon() {
  return (
    <div className="flex h-full flex-col justify-center align-middle">
      <PokeBall className="mx-auto h-64 w-64 opacity-5" />
    </div>
  );
}
