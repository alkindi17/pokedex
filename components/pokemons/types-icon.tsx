import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
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
        </TooltipTrigger>
        <TooltipContent>
          <p className="capitalize">{type}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
