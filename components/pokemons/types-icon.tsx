import Image from "next/image";

export default function TypeIcon({
  type,
  width,
  height,
}: {
  type: string;
  width: number;
  height: number;
}) {
  const bgColor = "bg-" + type.toLowerCase();

  return (
    <div
      className={`${bgColor} flex items-center justify-center rounded-full p-[22%]`}
      style={width && height ? { width, height } : {}}
    >
      <div className="opacity-70">
        <Image
          src={`/pokemon-types/icons/${type}.svg`}
          alt={type}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
