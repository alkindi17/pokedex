import { LoadingDots } from "@/components/ui/loading";

export default function PokemonLoading() {
  return (
    <div 
    className="h-full flex"
    style={{height: '100vh', display: 'flex', paddingTop: 'auto', paddingBottom: 'auto'}}
    >
        <LoadingDots />
    </div>
  );
}
