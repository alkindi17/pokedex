import Image from "next/image";

export default function TypeIcon({ type }: { type: string }) {
  const bgColor = "bg-" + type.toLowerCase();

  return (
    <div
      className={`${bgColor} flex h-fit w-fit items-center justify-center rounded-full p-3`}
    >
      <div className="h-[20px] w-[20px] opacity-70">
        <Image
          src={`/pokemon-types/icons/${type}.svg`}
          alt={type}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
